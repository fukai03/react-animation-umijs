import { PageContainer } from '@ant-design/pro-components';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import './index.less';

const BaiduMapBasic = () => {
  const mapRef = useRef(null);
  const mapRef1 = useRef(null);
  const [fullState, setFullState] = useState(false);

  useEffect(() => {
    let map = new BMapGL.Map(mapRef.current);
    let point = new BMapGL.Point(116.404, 39.915);
    map.centerAndZoom(point, 5);
    map.enableScrollWheelZoom(true);
    let map1 = new BMapGL.Map(mapRef1.current);
    map1.centerAndZoom(point, 5);
    map1.enableScrollWheelZoom(true);
  }, []);
  const onKeyDown = (e) => {
    console.log('e', e);
  };
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown); // 添加全局事件
    return () => {
      window.removeEventListener('keydown', onKeyDown); // 销毁
    };
  }, []);
  const fullClick = () => {
    setFullState(!fullState);
  };
  useEffect(() => {
    const mp = document.getElementById('mapid');
    const fullscreenMethod =
      mp.requestFullScreen || // W3C
      mp.webkitRequestFullScreen || // Chrome等
      mp.mozRequestFullScreen || // FireFox
      mp.msRequestFullScreen; // IE11
    const exitFullscreenMethod =
      document.exitFullScreen ||
      document.mozCancelFullScreen ||
      document.webkitExitFullscreen ||
      document.msExitFullscreen;
    if (fullState) {
      // console.log('进入全屏');
      fullscreenMethod && fullscreenMethod.call(mp);
    } else {
      // console.log('退出全屏');
      exitFullscreenMethod && exitFullscreenMethod.call(document);
    }
    return () => {};
  }, [fullState]);
  useEffect(() => {
    // 监听窗口退出全屏解决无法监听Esc按键
    function checkFull() {
      let isFull =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement;
      if (isFull === null) {
        isFull = false;
      }
      console.log(isFull)
      return isFull;
    }
    window.onresize = function () {
      if (!checkFull()) {
        setFullState(false); // 改变状态，icon随之改变
      }
    };

    return () => {};
  }, []);

  const fullScreenClick = () => {
    const mp = document.getElementById('mapid2');
    const fullscreenMethod =
      mp.requestFullScreen || // W3C
      mp.webkitRequestFullScreen || // Chrome等
      mp.mozRequestFullScreen || // FireFox
      mp.msRequestFullScreen; // IE11
    fullscreenMethod && fullscreenMethod.call(mp);
  }
  const exitfullScreenClick = () => {
    const exitFullscreenMethod =
    document.exitFullScreen ||
    document.mozCancelFullScreen ||
    document.webkitExitFullscreen ||
    document.msExitFullscreen;
    exitFullscreenMethod && exitFullscreenMethod.call(document);
  }

  return (
    <PageContainer className='wrap'>
      <div
        style={{ width: '400px', height: '400px', position: 'relative' }}
        id="mapid"
        className='mapWraper'
      >
        <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
        <div
          style={{
            position: 'absolute',
            right: 10,
            bottom: 10,
            zIndex: 9999,
            fontSize: '20px',
          }}
          onClick={fullClick}
        >
          {!fullState ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
        </div>
      </div>
      <div
        style={{ width: '400px', height: '400px', position: 'relative' }}
        id="mapid2"
        className='mapWraper'
      >
      <div ref={mapRef1} style={{ width: '100%', height: '100%' }}></div>
        <div className='fullScreenIcon' onClick={fullScreenClick}></div>
        <div className='exitfullScreenIcon' onClick={exitfullScreenClick}></div>
      </div>
    </PageContainer>
  );
};
export default BaiduMapBasic;
