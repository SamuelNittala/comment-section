import { Text, Center, Stack } from '@chakra-ui/react';
import React from 'react';
import type { UpDownPropsType } from './UpDown.types';

export default function UpDown({ upCount: count }: UpDownPropsType) {
  const [upCount, setUpCount] = React.useState<number>(count);
  const [isUp, setIsUp] = React.useState(false);
  const [isDown, setIsDown] = React.useState(false);
  return (
    <Stack
      direction={['row', 'column']}
      spacing="15px"
      bgColor="brand.lightGray"
      borderRadius="10px"
    >
      <Center
        w="25px"
        h="25px"
        _hover={{ cursor: 'pointer' }}
        onClick={() => {
          if (!isUp) {
            setUpCount(!isDown ? upCount + 1 : upCount + 2);
            setIsUp(true);
            setIsDown(false);
          } else {
            setUpCount(upCount - 1);
            setIsUp(false);
          }
        }}
        bgColor={isUp ? 'pink' : 'brand.lightGray'}
        borderRadius="5px"
      >
        <img src="../images/icon-plus.svg" alt="upvote" />
      </Center>
      <Center w="25px" h="25px">
        <Text fontSize="sm" p="0" m="0" color="brand.moderateBlue">
          {upCount}
        </Text>
      </Center>
      <Center
        w="25px"
        h="25px"
        borderRadius="5px"
        _hover={{ cursor: 'pointer' }}
        bgColor={isDown ? 'pink' : 'brand.lightGray'}
        onClick={() => {
          if (!isDown) {
            setUpCount(!isUp ? upCount - 1 : upCount - 2);
            setIsUp(false);
            setIsDown(true);
          } else {
            setUpCount(upCount + 1);
            setIsDown(false);
          }
        }}
      >
        <img src="../images/icon-minus.svg" alt="upvote" />
      </Center>
    </Stack>
  );
}
