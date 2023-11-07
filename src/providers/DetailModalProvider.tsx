import { ReactNode, useCallback, useEffect, useState } from "react";
import createSafeContext from "../lib/createSafeContext";
import { MEDIA_TYPE } from "../types/Common";
import { MovieDetail } from "../types/Movie";
import { useLocation } from "react-router-dom";
import { INITIAL_DETAIL_STATE } from "../constant";
import { useLazyGetAppendedVideosQuery } from "../store/slices/discover";

interface DetailType {
  id?: number;
  mediaType?: MEDIA_TYPE;
}
export interface DetailModalConsumerProps {
  detail: { mediaDetail?: MovieDetail } & DetailType;
  setDetailType: (newDetailType: DetailType) => void;
}
export const [useDetailModal, Provider] =
  createSafeContext<DetailModalConsumerProps>();
export default function DetailModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const location = useLocation();
  const [detail, setDetail] = useState<
    { mediaDetail?: MovieDetail } & DetailType
  >(INITIAL_DETAIL_STATE);
  const [getAppendedVideos] = useLazyGetAppendedVideosQuery();
  const handleChangeDetail = useCallback(
    async (newDetailType: { mediaType?: MEDIA_TYPE; id?: number }) => {
      if (!!newDetailType.id && newDetailType.mediaType) {
        const response = await getAppendedVideos({
          mediaType: newDetailType.mediaType,
          id: newDetailType.id as number,
        }).unwrap();
        setDetail({ ...newDetailType, mediaDetail: response });
      } else {
        setDetail(INITIAL_DETAIL_STATE);
      }
    },
    []
  );
  useEffect(() => {
    setDetail(INITIAL_DETAIL_STATE);
  }, [location.pathname, setDetail]);
  return (
    <Provider value={{ detail, setDetailType: handleChangeDetail }}>
      {children}
    </Provider>
  );
}
