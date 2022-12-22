import { PageContainer } from '@ant-design/pro-components';
import { useRef, useEffect } from 'react';
import {Engine, EmptySky} from 'mapv-three';
import {BoxGeometry, MeshStandardMaterial, Mesh} from 'three';

const BaiduMapBasic = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map = new BMapGL.Map(mapRef.current);
    // 设置坐标点(北京)
    const center = [116.39151758905, 39.8932990056012];
    let point = new BMapGL.Point(center[0], center[1]);
    // 设置地图中心点及缩放
    map.centerAndZoom(point, 18);
    // 允许滚轮缩放
    map.enableScrollWheelZoom(true);
    map.setTilt(60);

    // 初始化 mapvthree 引擎
    const engine = new Engine(map);
    engine.map.setCenter(center);
    engine.map.setPitch(80);
    // 添加天空
    const sky = engine.add(new EmptySky());
    sky.time = 3600 * 14.5;

    // 添加一个立方体
    const geometry = new BoxGeometry(100, 100, 100);
    const material = new MeshStandardMaterial({
        color: 'blue',
        metalness: 0.8,
    });
    const box = new Mesh(geometry, material);
    const position = engine.map.projectPointArr(center);
    box.position.x = position[0];
    box.position.y = position[1];
    engine.add(box);
  });

  return (
    <PageContainer>
      <div ref={mapRef} style={{ width: '800px', height: '600px' }}></div>
    </PageContainer>
  );
};
export default BaiduMapBasic;
