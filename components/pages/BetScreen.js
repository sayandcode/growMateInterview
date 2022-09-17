import { Suspense } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useResource } from '../../utils/CustomHooks/useResource';
import BetImg, { BetImgFallback } from '../BetScreen/BetImg';
import fetchBetScreenData from '../BetScreen/fetchBetScreenData';

function BetScreen({ route }) {
  /* todo: uncomment this */
  // const { betID } = route.params;
  /* todo: delete this */
  const betID = 'chinaTaiwan01';

  const betScreenDataResource = useResource(
    fetchBetScreenData.bind(null, betID),
    []
  );

  return (
    <SafeAreaView>
      <Suspense fallback={<BetImgFallback />}>
        <BetImg betDataResource={betScreenDataResource} />
      </Suspense>
    </SafeAreaView>
  );
}

export default BetScreen;
