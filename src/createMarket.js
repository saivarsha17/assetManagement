import { useEffect, useState } from 'react';
import './createMarket.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IMAGES } from './images/asset';
export const CreateMarket = (props) => {
  const setModal = props.setModal;
  const [tabIndex, setTabIndex] = useState(0);
  const [tabName, setTabName] = useState('Choose your Asset');
  const [assetIndex, setAssetIndex] = useState(-1);
  const name = ['Choose your Asset', 'Choose Opposing Asset', 'Take Position'];
  const [drawerIndex, setDrawerIndex] = useState(0);
  const drawerNames = ['Crypto', 'Indexes', ' Stocks', 'Commodities', 'Forex'];
  const COLORS = ['#6F9246', '#9E44FF', '#14172B'];
  const drawerAssets = [
    'Ethereum',
    'Avalanche',
    'Cardano',
    'Chainlink',
    'Algorand',
    'Ethereum',
    'Avalanche',
    'Cardano',
    'Chainlink',
    'Algorand',
    'Ethereum',
    'Avalanche',
    'Cardano',
    'Chainlink',
    'Algorand',
    'Ethereum',
    'Avalanche',
    'Cardano',
    'Chainlink',
    'Algorand',
    'Ethereum',
    'Avalanche',
    'Cardano',
    'Chainlink',
    'Algorand',
  ];
  const drawerAssetsIcons = [
    IMAGES.ETHEREUM,
    IMAGES.AVALANCHE,
    IMAGES.CARDANO,
    IMAGES.CHAIN_LINK,
    IMAGES.ALGORAND,
    IMAGES.ETHEREUM,
    IMAGES.AVALANCHE,
    IMAGES.CARDANO,
    IMAGES.CHAIN_LINK,
    IMAGES.ALGORAND,
    IMAGES.ETHEREUM,
    IMAGES.AVALANCHE,
    IMAGES.CARDANO,
    IMAGES.CHAIN_LINK,
    IMAGES.ALGORAND,
    IMAGES.ETHEREUM,
    IMAGES.AVALANCHE,
    IMAGES.CARDANO,
    IMAGES.CHAIN_LINK,
    IMAGES.ALGORAND,
    IMAGES.ETHEREUM,
    IMAGES.AVALANCHE,
    IMAGES.CARDANO,
    IMAGES.CHAIN_LINK,
    IMAGES.ALGORAND,
  ];
  const [usersData, setUsersData] = useState({
    user1AssetName: '',
    user2AssetName: '',
    user1AssetImage: '',
    user2AssetImage: '',
  });
  const handleAsset = (index) => {
    console.log('selected');
    if (tabIndex === 0) {
      setUsersData((prev) => ({
        ...prev,
        user1AssetName: drawerAssets[index],
        user1AssetImage: drawerAssetsIcons[index],
      }));
    }
    if (tabIndex === 1) {
      setUsersData((prev) => ({
        ...prev,
        user2AssetName: drawerAssets[index],
        user2AssetImage: drawerAssetsIcons[index],
      }));
    }
  };
  useEffect(() => {
    if (tabIndex === 2) {
      console.log('usersdata', usersData);
    }
  }, [usersData, tabIndex]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateEnd, setSelectedDateEnd] = useState(null);
  const [amount, setAmount] = useState('');
  const handleCreate = () => {
    if (selectedDate && selectedDateEnd && amount.length > 0) {
      setModal(false);
    }
  };

  return (
    <div className="drawerContainer">
      <div className="assetContainer">
        <div className="headingMain">
          <div className="headingContainer">Multi-user Lot</div>
          <img
            className="closeImageContainer"
            src={IMAGES.CLOSE_CIRCLE}
            alt="closedCircle"
            onClick={() => setModal(false)}
          />
        </div>
        <div className="tabIndexContainer">
          <div
            style={{ background: tabIndex === 0 ? COLORS[1] : COLORS[0] }}
            className="indexContainer"
          >
            1
          </div>
          <div
            style={{
              background:
                tabIndex === 0
                  ? COLORS[2]
                  : tabIndex === 1
                  ? COLORS[1]
                  : COLORS[0],
            }}
            className="indexContainer"
          >
            2
          </div>
          <div
            style={{ background: tabIndex === 2 ? COLORS[1] : COLORS[2] }}
            className="indexContainer"
          >
            3
          </div>
        </div>
        <div className="subHeadingContainer">{name[tabIndex]}</div>
        {tabIndex !== 2 && (
          <input
            className="searchContainer"
            placeholder="Search Token eg. ETH, Gold etc"
          />
        )}
        {tabIndex !== 2 && (
          <div className="drawerAssetContainer">
            {drawerNames.map((data, index) => {
              return (
                <div
                  style={{
                    background:
                      drawerIndex === index
                        ? 'rgba(158, 68, 255, 0.25)'
                        : 'None',
                    color: drawerIndex === index ? 'white' : 'black',
                  }}
                  onClick={() => {
                    if (tabIndex === 0) {
                      setDrawerIndex(index);
                      setAssetIndex(-1);
                    }
                  }}
                  className="drawerAssetContainerHeading"
                >
                  {data}
                </div>
              );
            })}
          </div>
        )}
        {tabIndex !== 2 && (
          <div className="drawerAssetContainer">
            {drawerAssets.map((data, index) => {
              return (
                <div
                  onClick={() => {
                    handleAsset(index);
                    setAssetIndex(index);
                  }}
                  className="drawerAssetContainerName"
                  style={{
                    background:
                      assetIndex === index
                        ? 'rgba(158, 68, 255, 0.25) '
                        : 'None',
                  }}
                >
                  <img
                    className="drawerAssetContainerImage"
                    src={drawerAssetsIcons[index]}
                    alt="asset"
                  />
                  <div>{data}</div>
                </div>
              );
            })}
          </div>
        )}
        {tabIndex === 2 && (
          <>
            <div className="userAssetMainContainer">
              <div className="userAssetContainer">
                <div className="userAssetHeadingContainer"> Your Asset</div>
                <img
                  className="userAssetImageUserContainer"
                  src={usersData.user1AssetImage}
                  alt="user1Asset"
                />
                <div className="userAssetHeadingContainer">
                  {usersData.user1AssetName}
                </div>
              </div>
              <div className="userAssetImageContainer">
                <img
                  className="userAssetImage"
                  src={IMAGES.FRAME}
                  alt="frame"
                />
              </div>
              <div className="userAssetContainer">
                <div className="userAssetHeadingContainer"> Opponent Asset</div>
                <img
                  className="userAssetImageUserContainer"
                  src={usersData.user2AssetImage}
                  alt="user2Asset"
                />
                <div className="userAssetHeadingContainer">
                  {usersData.user1AssetName}
                </div>
              </div>
            </div>
            <div
              style={{ textAlign: 'left' }}
              className="userAssetHeadingContainer"
            >
              Fund Your Pool
            </div>
            <input
              className="fundYourPoolContainer"
              placeholder="Enter Amount"
              value={amount}
              type="number"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
            <div
              style={{ textAlign: 'left' }}
              className="userAssetHeadingContainer"
            >
              Lot Starts On
            </div>

            <DatePicker
              className="fundYourPoolContainer"
              closeOnScroll={true}
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              showYearDropdown
              yearDropdownItemNumber={5}
              scrollableYearDropdown
              peekNextMonth
              showMonthDropdown
              dropdownMode="select"
              todayButton="Today"
            />
            <div
              style={{ textAlign: 'left' }}
              className="userAssetHeadingContainer"
            >
              Lot Ends On
            </div>
            {/* <input className="fundYourPoolContainer" /> */}
            <DatePicker
              selected={selectedDateEnd}
              onChange={(e) => {
                if (
                  selectedDate &&
                  e.valueOf() - selectedDate.valueOf() > 0 &&
                  e instanceof Date
                ) {
                  setSelectedDateEnd(e);
                }
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              className="fundYourPoolContainer"
              showYearDropdown
              yearDropdownItemNumber={5}
              scrollableYearDropdown
              peekNextMonth
              showMonthDropdown
              dropdownMode="select"
              todayButton="Today"
            ></DatePicker>
            {/* <DatePicker
             
             
            /> */}
          </>
        )}
        <div className="buttonContainer">
          {tabIndex !== 0 && (
            <div
              className="buttonContainerBack"
              onClick={() => {
                if (tabIndex > 0) {
                  setTabIndex((prev) => prev - 1);
                }
              }}
            >
              Back
            </div>
          )}
          {tabIndex !== 2 && (
            <div
              className="buttonContainerBack"
              onClick={() => {
                if (tabIndex < 2) {
                  if (assetIndex !== -1) {
                    setTabIndex((prev) => prev + 1);
                  }
                }
              }}
            >
              Next
            </div>
          )}
          {tabIndex === 2 && (
            <div
              className="buttonContainerBack"
              onClick={() => {
                handleCreate();
                // setModal(false);
              }}
            >
              Create a Lot
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
