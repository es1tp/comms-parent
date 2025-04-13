import { KbApi } from '@/api-kb'

export const calendar: KbApi.Article = {
  "id": "calendar",
  "pages": [
    {
      "id": "calendar_en",
      "localeCode": "en",
      "title": "Calendar of events in the world of Estonian ham radio",
      "materials": [
        {
          "id": "calendar_en_content",
          "text": "## Calendar of events in the world of Estonian ham radio  \nThis page describes next relevant event"
        }
      ],
      "questionnaire": []
    },
    {
      "id": "calendar_et",
      "localeCode": "et",
      "title": "Eesti raadioamatööri kalender",
      "materials": [
        {
          "id": "calendar_et_content",
          "text": "## Eesti raadioamatööri kalender  \nSellel lehel kirjeldatakse järgmist asjakohast sündmust"
        }
      ],
      "questionnaire": []
    }
  ]
}