import React, { useState } from "react";
import classNames from 'classnames'
import "./index.scss";

export function NearDate() {
  return (
    <>
      <div className="nearDate">
        <div className="content">
          <div className="top">
            <span className="mmdd light">{"12月1日"}</span>
            <span className="week">{"(周四)"}</span>-
            <span className="mmdd">{"12月13日"}</span>
            <span className="week">{"(周四)"}</span>
          </div>
          <div className="bottom">
            <span className="price">￥122,131</span>
            <span className="sp">{' 起'}</span>
          </div>
        </div>
        <div className="search">查询</div>
      </div>
      <div className="nearDate">
        <div className="content">
          <div className="top">
            <span className="mmdd light">{"12月1日"}</span>
            <span className="week">{"(周四)"}</span>-
            <span className="mmdd">{"12月13日"}</span>
            <span className="week">{"(周四)"}</span>
          </div>
          <div className="bottom">
            <span className="price">￥122,131</span>
            <span className="sp">{' 起'}</span>
          </div>
        </div>
        <div className="search">查询</div>
      </div>
      <div className="nearDate">
        <div className="content">
          <div className="top">
            <span className="mmdd light">{"12月1日"}</span>
            <span className="week">{"(周四)"}</span>
          </div>
          <div className="bottom">
            <span className="price">￥122,131</span>
            <span className="sp">{'  起'}</span>
          </div>
        </div>
        <div className="search">查询</div>
      </div>
    </>
  );
}

export function NoResultReasonNavigator() {
  return (
    <div className="noResultReasonNavigator">
      <span className="iconfont">&#xf51c;</span>
      <div className="text">{"当前as城市/机场无航班 推荐临近城市"}</div>
    </div>
  );
}

export function NearCitySingleContent(a: number) {
  return (
      <div className="nearCitySingleContent">
      <div className={classNames({dispalya: a === 0})}>{'0'}</div>
      <div className={classNames({dispalya: a === 1})}>{'1'}</div>
      <div className={classNames({dispalya: a === 2})}>{'2'}</div>
      </div>
      );
  
  }

export function NearCitySingle() {
  const [state, setState] = useState(0)

  return (
    <>
      <div className="nearCitySingle">
        <div className="cityBox choosed" onClick={() => setState(0)}>
          {`北京 - 上海 ￥ 1199起`}
        <div className="iconfont">&#xf4fb;</div>
      </div>
      <div className="cityBox" onClick={() => setState(1)}>{`北京 - 上海 ￥ 1199起`}</div>
      <div className="cityBox" onClick={() => setState(2)}>{`北京 - 上海 ￥ 1199起`}</div>
    </div>
    {NearCitySingleContent(state)}
    </>



  );
}

export function NearCityRound() {
  return (
    <>
      <div className="nearCityRound">
        <div className="top">
          <span className="mmdd light">{"12月1日"}</span>
          <span className="week">{"(周四)"}</span>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="city">南通</span>
            <span>{"->"}</span>
            <span className="city">北京</span>
          </div>
          <div className="right">
            <span className="price">￥122,131</span>
            <span className="sp">{` 起`}</span>
          </div>
        </div>
      </div>
      <div className="nearCityRound">
        <div className="top">
          <span className="mmdd light">{"12月1日"}</span>
          <span className="week">{"(周四)"}</span>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="city">南通</span>
            <span>{"->"}</span>
            <span className="city">北京</span>
          </div>
          <div className="right">
            <span className="price">￥122,131</span>
            <span className="sp"> 起</span>
          </div>
        </div>
      </div>
      <div className="nearCityRoundSearch">
        {'搜索往返'}
      </div>
    </>
  );
}
