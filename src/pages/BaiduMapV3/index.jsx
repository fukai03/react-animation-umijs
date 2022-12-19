import { PageContainer } from '@ant-design/pro-components';
import { useRef, useEffect } from 'react';

const BaiduMapTrace = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map = new BMap.Map(mapRef.current);
    // 设置坐标点(北京)
    let point = new BMap.Point(116.404, 39.915);
    // 设置地图中心点及缩放
    map.centerAndZoom(point, 12);
    // 允许滚轮缩放
    map.enableScrollWheelZoom(true);

    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());

    // let geolocation = new BMap.Geolocation();
    // geolocation.getCurrentPosition(function (r) {
    //   if (this.getStatus() === BMAP_STATUS_SUCCESS) {
    //     let mk = new BMap.Marker(r.point);
    //     map.addOverlay(mk);
    //     map.panTo(r.point);
    //     console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
    //   } else {
    //     console.log('failed' + this.getStatus());
    //   }
    // });

    let marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

    let sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
      scale: 0.6, //图标缩放大小
      strokeColor: '#fff', //设置矢量图标的线填充颜色
      strokeWeight: '2', //设置线宽
    });
    let icons = new BMap.IconSequence(sy, '10', '30');
    // 创建polyline对象
    let pois = [
      new BMap.Point(116.350658, 39.938285),
      new BMap.Point(116.386446, 39.939281),
      new BMap.Point(116.389034, 39.913828),
      new BMap.Point(116.442501, 39.914603),
    ];
    let polyline = new BMap.Polyline(pois, {
      enableEditing: false, //是否启用线编辑，默认为false
      enableClicking: true, //是否响应点击事件，默认为true
      icons: [icons],
      strokeWeight: '8', //折线的宽度，以像素为单位
      strokeOpacity: 0.8, //折线的透明度，取值范围0 - 1
      strokeColor: '#18a45b', //折线颜色
    });
    map.addOverlay(polyline); //增加折线

    let curve = new BMapLib.CurveLine(pois, {
      strokeColor: 'blue',
      strokeWeight: 3,
      strokeOpacity: 0.5,
    }); //创建弧线对象
    map.addOverlay(curve); //添加到地图中
  });
  return (
    <PageContainer>
      <div ref={mapRef} style={{ width: '800px', height: '600px' }}></div>
    </PageContainer>
  );
};
export default BaiduMapTrace;
