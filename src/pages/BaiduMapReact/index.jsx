import { PageContainer } from '@ant-design/pro-components';
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmapgl';

const BaiduMapReact = () => {
  return (
    <PageContainer>
      <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11">
        <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
        <NavigationControl />
        <InfoWindow
          position={{ lng: 116.402544, lat: 39.928216 }}
          text="内容"
          title="标题"
        />
      </Map>
    </PageContainer>
  );
};
export default BaiduMapReact;
