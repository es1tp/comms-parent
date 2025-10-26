import React from 'react';
import { YStack, XStack, Input, Text, Button, Sheet } from 'tamagui';
import { Filter } from '@tamagui/lucide-icons';


export const ChatFilter: React.FC<{
  onFilter(value: number | null): void 
}> = ({ onFilter }) => {

  const [filterOpen, setFilterOpen] = React.useState(false);
  const [distanceFilter, setDistanceFilter] = React.useState<string>('');
  const [appliedFilter, setAppliedFilter] = React.useState<number | null>(null);


  const handleApplyFilter = () => {
    const distance = parseFloat(distanceFilter);
    const actualDistance = isNaN(distance) ? null : distance;

    setAppliedFilter(actualDistance);
    onFilter(actualDistance);
    setFilterOpen(false);
  }

  const handleClearFilter = () => {
    setDistanceFilter('');
    setAppliedFilter(null);
    onFilter(null);
    setFilterOpen(false);
  }

  return (
    <>
      {/* Filter Sheet */}
      <Sheet
        modal
        open={filterOpen}
        onOpenChange={setFilterOpen}
        snapPoints={[40]}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame padding="$4">
          <Sheet.Handle />
          <YStack gap="$4" paddingTop="$4">
            <Text fontSize="$5" fontWeight="bold">Filter by Distance</Text>
            <Input
              placeholder="Enter distance in km (e.g., 100)"
              value={distanceFilter}
              onChangeText={setDistanceFilter}
              keyboardType="numeric"
              size="$4"
            />
            <XStack gap="$3">
              <Button flex={1} onPress={handleApplyFilter} disabled={!distanceFilter}>
                Apply
              </Button>
              <Button flex={1} onPress={handleClearFilter} variant="outlined">
                Clear
              </Button>
            </XStack>
          </YStack>
        </Sheet.Frame>
      </Sheet>
      
      <Button
        size="$3"
        icon={Filter}
        onPress={() => setFilterOpen(true)}
        variant={appliedFilter ? "outlined" : undefined}
      >
        {appliedFilter ? `${appliedFilter} km` : 'Filter'}
      </Button>
    </>
  );
}
