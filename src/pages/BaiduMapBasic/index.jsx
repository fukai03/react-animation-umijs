import { PageContainer } from '@ant-design/pro-components';
import { useRef, useEffect } from 'react';

const BaiduMapBasic = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log(BMapGL);
    let map = new BMapGL.Map(mapRef.current, {
      backgroundColor: [6, 61, 86, 100],
    });
    let point = new BMapGL.Point(113.35, 23.29);
    // let point = new BMapGL.Point(116.20596467080586,40.0144555532275);
    map.centerAndZoom(point, 12);
    map.enableScrollWheelZoom(true);
    map.setTilt(45);
  });

  return (
    <PageContainer>
      <div>
        百度地图基础使用
        <div ref={mapRef} style={{ width: '600px', height: '600px' }}></div>
      </div>
    </PageContainer>
  );
};
export default BaiduMapBasic;
