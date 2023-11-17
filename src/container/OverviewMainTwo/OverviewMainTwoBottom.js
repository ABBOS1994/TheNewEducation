import React, { useState } from 'react';
import OverviewMainTwoBottomLeft from './Overview-MainTwo-Bottom-Left';
import OverviewMainTwoBottomRight from './Overview-MainTwo-Bottom-Right';
import OverviewMainTwoBottomLeftOnclick from './OverviewMainTwoBottomLeftOnclick';
import OverviewMainTwoBottomRightOnclick from './OverviewMainTwoBottomRightOnclick';

function OverviewMainTwoBottom() {
  const [pageState, setPageState] = useState(false);
  const pageTab = () => {
    setPageState((prevState) => !prevState);
  };

  return (
    <div className='w-screen bg-white'>
      <div className='container m-auto h-auto w-11/12 lg:w-[980px] xl:w-full'>
        <div className='mt-20 flex h-24 items-center justify-evenly rounded-3xl bg-germain'>
          <button
            onClick={pageTab}
            className=' ml-4 grid h-20 w-full place-items-center rounded-3xl bg-white'
            data-aos='flip-left'
          >
            <h1
              className={
                !pageState
                  ? 'bg-gradient-to-r from-gradientStart to-gradientFinish bg-clip-text px-2 text-xl text-transparent md:text-3xl xl:px-0'
                  : 'px-2 text-lg text-black md:text-3xl xl:px-0'
              }
            >
              Janubiy Koreyada o’qish
            </h1>
          </button>
          <button
            onClick={pageTab}
            className='mx-4 grid h-20 w-full place-items-center rounded-3xl bg-white'
            data-aos='flip-right'
          >
            <h1
              className={
                !pageState
                  ? 'text-xl text-black  md:text-3xl'
                  : 'bg-gradient-to-r from-gradientStart to-gradientFinish bg-clip-text text-base text-lg text-transparent md:text-3xl'
              }
            >
              Germaniyada work and travel
            </h1>
          </button>
        </div>
      </div>

      {!pageState ? (
        <div className='container m-auto mt-12 h-full w-full justify-center rounded-3xl lg:flex'>
          <OverviewMainTwoBottomLeft />
          <OverviewMainTwoBottomRight />
        </div>
      ) : (
        <div className='container m-auto mt-12 w-full justify-between rounded-3xl md:flex'>
          <OverviewMainTwoBottomLeftOnclick />
          <OverviewMainTwoBottomRightOnclick />
        </div>
      )}
    </div>
  );
}

export default OverviewMainTwoBottom;
