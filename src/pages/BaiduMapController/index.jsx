import { PageContainer } from '@ant-design/pro-components';
import { useRef, useEffect } from 'react';

const BaiduMapController = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map = new BMapGL.Map(mapRef.current);
    // 设置坐标点(北京)
    let point = new BMapGL.Point(116.404, 39.915);
    // 设置地图中心点及缩放
    map.centerAndZoom(point, 10);
    // 允许滚轮缩放
    map.enableScrollWheelZoom(true);

    // 添加控件
    let scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
    map.addControl(scaleCtrl);

    let zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
    map.addControl(zoomCtrl);

    let cityCtrl = new BMapGL.CityListControl(); // 添加城市列表控件
    map.addControl(cityCtrl);

    let locationCtrl = new BMapGL.LocationControl(); // 添加城市列表控件
    map.addControl(locationCtrl);

    let copyrightCtrl = new BMapGL.CopyrightControl({
      // 右下角添加自定义版权信息
      anchor: BMAP_ANCHOR_BOTTOM_RIGHT, // 位置设为右下角
    });
    copyrightCtrl.addCopyright({ id: 1, content: '自定义版权信息' });
    map.addControl(copyrightCtrl);
  });
  return (
    <PageContainer>
      <div ref={mapRef} style={{ width: '800px', height: '600px' }}></div>
    </PageContainer>
  );
};
export default BaiduMapController;
