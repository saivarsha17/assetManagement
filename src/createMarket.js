import { useEffect, useState } from 'react';
import './createMarket.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IMAGES } from './images/asset';
import { drawerAssets, name, drawerNames, COLORS } from './constants';
export const CreateMarket = (props) => {
  const setModal = props.setModal;
  const [popup, setPopup] = useState(false);
  const [popupText, setPopupText] = useState('');
  const [tabIndex, setTabIndex] = useState(0);

  const [assetIndex, setAssetIndex] = useState(-1);

  const [drawerIndex, setDrawerIndex] = useState(0);

  const [usersData, setUsersData] = useState({
    user1AssetName: '',
    user2AssetName: '',
    user1AssetImage: '',
    user2AssetImage: '',
  });
  const [assetData, setassetData] = useState(drawerAssets);
  const handleAsset = (index) => {
    console.log('selected');
    if (tabIndex === 0) {
      setUsersData((prev) => ({
        ...prev,
        user1AssetName: assetData[index].name,
        user1AssetImage: assetData[index].image,
      }));
    }
    if (tabIndex === 1) {
      setUsersData((prev) => ({
        ...prev,
        user2AssetName: assetData[index].name,
        user2AssetImage: assetData[index].image,
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
    } else {
      setPopup(true);
      setPopupText('Fill all details before creating a lot');
      setTimeout(() => setPopup(false), 2000);
    }
  };
  const handleSearch = (value) => {
    const newData = [];
    drawerAssets.forEach((data) => {
      const name = data.name.toLowerCase();
      const isPresent = name.includes(value);

      if (isPresent) {
        newData.push(data);
      }
    });

    setassetData(newData);
  };

  return (
    <div className="drawerContainer">
      {popup && <div className="popupContainer">{popupText}</div>}
      <div className="lineContainer"></div>
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
            onChange={(e) => handleSearch(e.target.value)}
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
          <div className="drawerAssetContainer1">
            {assetData.map((data, index) => {
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
                    src={data.image}
                    alt="asset"
                  />
                  <div>{data.name}</div>
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
                  {usersData.user2AssetName}
                </div>
              </div>
            </div>
            <div className="detailsContainer">
              <div
                style={{ textAlign: 'left' }}
                className="userAssetHeadingContainer1"
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
                className="userAssetHeadingContainer1"
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
                className="userAssetHeadingContainer1"
              >
                Lot Ends On
              </div>

              <DatePicker
                selected={selectedDateEnd}
                onChange={(e) => {
                  if (
                    selectedDate &&
                    e.valueOf() - selectedDate.valueOf() > 0 &&
                    e instanceof Date
                  ) {
                    setSelectedDateEnd(e);
                  } else if (selectedDate === null) {
                    setPopup(true);
                    setPopupText('First Enter the Lot Start Date');
                    setTimeout(() => setPopup(false), 2000);
                  } else {
                    setPopup(true);
                    setPopupText('Enter Date greater than Start Date');
                    setTimeout(() => setPopup(false), 2000);
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
            </div>
          </>
        )}
        <div className="endButtonContainer">
          <div className="buttonContainer">
            {tabIndex !== 0 && (
              <div
                className="buttonContainerBack"
                style={{
                  width: tabIndex !== 0 ? '11vw' : 'None',
                  marginRight: '1.25vw',
                }}
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
                style={{
                  width: tabIndex === 1 ? '11vw' : '26vw',
                }}
                onClick={() => {
                  if (tabIndex < 2) {
                    if (assetIndex !== -1) {
                      setTabIndex((prev) => prev + 1);
                      setAssetIndex(-1);
                    } else {
                      setPopup(true);
                      setPopupText('Select an Asset before going forward');
                      setTimeout(() => setPopup(false), 2000);
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
                style={{
                  width: tabIndex === 2 ? '11vw' : 'None',
                }}
                onClick={() => {
                  handleCreate();
                }}
              >
                Create a Lot
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
