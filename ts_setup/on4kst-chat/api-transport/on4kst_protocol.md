# ON4KST Telnet Protocol Specification

## Overview

Pipe-delimited protocol for real-time amateur radio DX cluster communication.

## Chat IDs

| ID | Description |
|----|-------------|
| 1 | 50/70 MHz |
| 2 | 144/432 MHz |
| 3 | Microwave |
| 4 | EME/JT65 |
| 5 | Low Band |
| 7 | 50 MHz IARI Region 2 |

## Connection Flow

1. Establish telnet connection
2. Send LOGIN or LOGINC frame
3. Receive LOGSTAT response (success or error)
4. If LOGINC: configure filters (SDXQ, SMAQ), send SDONE
5. Receive initial data burst (CR, DL, UA frames)
6. Receive continuous frame stream
7. Respond to CK keepalive frames

---

## Client → Server Frames

### Login Frames

#### LOGIN
Standard login with server defaults.

```
LOGIN|callsign|password|chat_id|client_version|past_msgs|past_dx|user_flags|last_msg_ts|last_dx_ts|
```

**Fields:**
- `callsign` - User callsign
- `password` - User password
- `chat_id` - Target chat (see Chat IDs)
- `client_version` - Software identifier
- `past_msgs` - Number of past messages to retrieve
- `past_dx` - Number of past DX spots to retrieve
- `user_flags` - 0=no user frames, 1=send user frames
- `last_msg_ts` - Unix timestamp for message filtering
- `last_dx_ts` - Unix timestamp for DX filtering

**Simplified:**
```
LOGIN|callsign|password|chat_id|client_version|
```
Equivalent to: `LOGIN|call|pass|id|ver|1|1|1|0|0|`

#### LOGINC
Login with client-side configuration (requires SDONE).

```
LOGINC|callsign|password|chat_id|client_version|past_msgs|past_dx|user_flags|last_msg_ts|last_dx_ts|
```

Same fields as LOGIN. Must follow with SDXQ/SMAQ/SDONE sequence.

#### LOGINP
Proxy login (for proxy applications).

```
LOGINP|proxy_callsign|password|chat_id|client_version|1|1|1|0|0|
```

---

### Configuration Frames

#### SDXQ
Set DX frequency ranges (session only, up to 8 ranges).

```
SDXQ|chat_id|qrg_min1|qrg_max1|qrg_min2|qrg_max2|...|qrg_min8|qrg_max8|
```

**Examples:**
```
SDXQ|2|                           # No DX spots
SDXQ|2|50000.1|50500.0|           # One range: 50000.1-50500.0 kHz
```

#### SMAQ
Set MAP frequency ranges (session only, up to 4 ranges).

```
SMAQ|chat_id|qrg_min1|qrg_max1|qrg_min2|qrg_max2|qrg_min3|qrg_max3|qrg_min4|qrg_max4|
```

**Examples:**
```
SMAQ|2|                                      # No MAP spots
SMAQ|2|50000.1|54000|144360|144399|         # Two ranges
```

#### SDONE
Signal end of configuration (required after LOGINC).

```
SDONE|chat_id|
```

#### RDXQ
Read current DX ranges.

```
RDXQ|chat_id|
```

**Response:**
```
DXQ|chat_id|qrg_min1|qrg_max1|...|qrg_min8|qrg_max8|
```

#### RMAQ
Read current MAP ranges.

```
RMAQ|chat_id|
```

**Response:**
```
MAQ|chat_id|qrg_min1|qrg_max1|...|qrg_min4|qrg_max4|
```

#### SPR
Set/reset propagation frame reception.

```
SPR|value|
```

#### PR
Read propagation flag.

```
PR|
```

---

### Chat Management

#### ACHAT
Add additional chat.

```
ACHAT|chat_id|past_msgs|past_dx|user_flags|last_msg_ts|last_dx_ts|
```

#### DCHAT
Remove chat.

```
DCHAT|chat_id|
```

---

### Messages and Commands

#### MSG
Send command or message.

```
MSG|chat_id|destination|command|0|
```

**Destination:**
- `0` - Public/broadcast
- `callsign` - Private message

**Available Commands:**
- `/AWAY` - Mark as away
- `/BACK` - Mark as present
- `/CHAT value` - Switch chat (50, 144, GHZ, EME, HF)
- `/CQ callsign msg` - Send highlighted message to callsign
- `/DX qrg callsign [info]` - Spot DX on cluster
- `/LSTCLX` - List available DX clusters
- `/SETCLX dxcluster` - Set DX cluster for spots
- `/SETNAME name` - Set first name
- `/SETLOC locator` - Set grid locator
- `/SHCLX` - Show current DX cluster
- `/SHLOC callsign` - Show callsign's locator
- `/SHUSER callsign` - Show user data
- `/QUIT` - Disconnect

---

### Proxy Commands

#### AUSER
Add user (proxy only).

```
AUSER|chat_id|user_callsign|password|
```

#### DUSER
Remove user (proxy only).

```
DUSER|chat_id|user_callsign|
```

#### OKUSER
Confirm user check (proxy only).

```
OKUSER|chat_id|user_callsign|
```

#### MSGP
Proxy user message.

```
MSGP|chat_id|user_callsign|destination|command|highlight|
```

---

### Keepalive Response

#### CK Response
Must respond to CK frame with CRLF (`\r\n`).

```
\r\n
```

---

## Server → Client Frames

### Login Response

#### LOGSTAT (Success)
Login successful with full configuration.

```
LOGSTAT|100|chat_id|client_version|session_key|config|dx_option|msg_font|wwc_font|bg_color|land_color|sea_color|map_res|upper_left|nb_x|nb_y|period|qrg_min1|qrg_max1|color_a1|color_b1|color_c1|qrg_min2|qrg_max2|color_a2|color_b2|color_c2|qrg_min3|qrg_max3|color_a3|color_b3|color_c3|qrg_min4|qrg_max4|color_a4|color_b4|color_c4|qrg_option|firstname|lastname|locator|email|
```

#### LOGSTAT (LOGINC Success)
Simplified response for client-configured login.

```
LOGSTAT|100|chat_id|client_version|session_key|config|firstname|lastname|locator|email|
```

#### LOGSTAT (Errors)

| Code | Message |
|------|---------|
| 101 | Unknown user %s |
| 102 | %s is a bad callsign (length) |
| 103 | %s is a bad callsign (used characters) |
| 104 | Bad password (length) |
| 105 | Bad password (used characters) |
| 106 | Wrong selection |
| 107 | The passwords don't match |
| 108 | Invalid callsign |
| 109 | Invalid password |
| 110 | Invalid first name |
| 111 | Invalid locator |
| 112 | Invalid email address |
| 113 | User already registered |
| 114 | Wrong password |
| 115 | Wrong selection |
| 116 | Invalid last name |
| 117 | PROXY not logged in that chat |
| 118 | PROXY %s not logged in that chat |
| 200 | PROXY %s callsign added |
| 201 | PROXY %s callsign removed |

---

### Chat Frames

#### CR
Chat message at login (initial burst).

```
CR|chat_id|unix_time|callsign|firstname|destination|msg|highlight|
```

**Fields:**
- `destination` - 0=public, callsign=private
- `highlight` - Ignore this field

#### CH
Chat message after login (ongoing).

```
CH|chat_id|date|callsign|firstname|destination|msg|highlight|
```

**Date format:** `YYYYMMDDhhmmss`

#### CE
End of CR frames marker.

```
CE|chat_id|
```

---

### DX Spot Frames

#### DL
DX spot for DX window.

```
DL|unix_time|dx_utc|spotter|qrg|dx|info|spotter_loc|dx_loc|
```

**Fields:**
- `dx_utc` - UTC time (hhmm format)
- `qrg` - Frequency in kHz
- `dx` - DX callsign
- `info` - Spot comment
- `spotter_loc` - Spotter's grid locator
- `dx_loc` - DX station's grid locator

#### DE
End of DL frames marker.

```
DE|
```

#### MA
MAP spot (for map display).

```
MA|map_window|unix_time|spotter|dx|spotter_loc|dx_loc|
```

**Fields:**
- `map_window` - QRG range index (0-3)

#### ME
End of MA frames marker.

```
ME|
```

#### DM
Combined DX + MAP spot.

```
DM|map_window|unix_time|dx_utc|spotter|qrg|info|spotter_loc|dx_loc|
```

#### DF
End of DM frames marker.

```
DF|
```

---

### User Frames

#### UA0
User list at login.

```
UA0|chat_id|callsign|firstname|locator|state|
```

**State bits:**
- Bit 0: User is away (display as "(callsign)")
- Bit 1: Logged in within last 5 minutes
- Bit 2: Sysop
- Bit 3: Reserved (privileges)

#### UE
User statistics / end of user list.

```
UE|chat_id|nb_registered_users|
```

#### US4
User state update.

```
US4|chat_id|callsign|state|
```

#### UM3
User already logged (duplicate login).

```
UM3|chat_id|callsign|firstname|locator|state|
```

#### UR6
User disconnected.

```
UR6|chat_id|callsign|
```

#### UA5
User connected.

```
UA5|chat_id|callsign|firstname|locator|state|
```

---

### Locator Update

#### LOC
Station locator update.

```
LOC|unix_time|callsign|locator|
```

---

### Propagation Frames

#### WC
WWC (World Wide Conditions).

```
WC|14345|unix_time|time|info|
```

#### AN
Cluster announcement.

```
AN|date|callsign|info|
```

**Date format:** `YYYYMMDDhhmmss`

#### PRKP
K and Kp indices.

```
PRKP|time|kpp|
```

#### PRMA
Magnetic field data.

```
PRMA|time|Bt|Bz|sws|
```

**Fields:**
- `Bt` - Total magnetic field
- `Bz` - North/south component
- `sws` - Solar wind speed

#### PRSW
Proton flux.

```
PRSW|time|proton|
```

#### PRWW
Solar conditions.

```
PRWW|time|solar_flux|A_index|K_index|sunspot_number|
```

#### PRXR
X-ray flux.

```
PRXR|time|xray|
```

#### PRAU
Aurora alert level.

```
PRAU|time|aurora_level|
```

**Aurora levels:**
- 2: High latitude warning
- 3: High latitude alert
- 5: Mid latitude warning
- 6: Mid latitude alert
- 8: Low latitude warning
- 9: Low latitude alert
- Other: No alert

---

### System Frames

#### SES
Session key.

```
SES|chat_id|session_key|
```

#### CK
Keepalive check.

```
CK|
```

**Must respond with:** `\r\n`

#### CKUSER
Check if user connected (proxy only).

```
CKUSER|chat_id|callsign|
```

---

## Frame Categories

### Login Flow
- `LOGIN` / `LOGINC` / `LOGINP` (C→S)
- `LOGSTAT` (S→C)
- `SDXQ`, `SMAQ`, `SDONE` (C→S, optional)
- `SES` (S→C)

### Initial Data Burst
- `CR...CE` - Chat history
- `DL...DE` - DX spots
- `MA...ME` - MAP spots
- `DM...DF` - Combined spots
- `UA0...UE` - User list

### Real-time Updates
- `CH` - New chat messages
- `DL`, `DM`, `MA` - New DX spots
- `UA5`, `UR6`, `US4` - User changes
- `LOC` - Locator updates

### Propagation Data
- `WC`, `PRKP`, `PRMA`, `PRSW`, `PRWW`, `PRXR`, `PRAU`

### Commands
- `MSG` / `MSGP` (C→S)
- `AN` (S→C)

### Keepalive
- `CK` (S→C)
- `\r\n` (C→S)

---

## Notes

- All frames are pipe-delimited (`|`)
- Unix timestamps are in seconds since epoch
- QRG (frequency) is in kHz with decimal precision
- Grid locators follow Maidenhead format
- Connection requires periodic CK response or will timeout
- Frame order: Login → Config → Initial burst → Real-time stream