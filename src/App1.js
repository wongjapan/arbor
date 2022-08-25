import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav className="slider open">
          <header>
            <div className="group_all">
              <div className="image-text">
                <span className="image">
                  <img src="assets/images/logo.png" alt="" />
                </span>

                <div className="text header-text">
                  <img src="assets/images/logo_2.png" className="name" alt="" />
                  {/* --> */}
                </div>
              </div>
            </div>
            <span className="toggle">
              <img src="assets/images/arrow-left.png" alt="" srcset="" />
            </span>
          </header>

          <div className="menu-bar">
            <div className="menu">
              <ul className="menu-links">
                <li className="nav-link">
                  <a href="#">
                    {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                    {/* <!-- <i className='bx bxs-grid-alt bx-rotate-180 icon' style='color:#a69f9f' ></i> --> */}
                    <img src="images/element-3.png" className="icon" alt="" />
                    <span className="text nav-test">Dashboard</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                    <img src="images/trade.png" className="icon" alt="" />

                    <span className="text nav-test">Launchpad</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <img
                      src="images/Group 427319472.png"
                      className="icon"
                      alt=""
                    />

                    <span className="text nav-test">Locker</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                    <img src="images/lock.png" className="icon" alt="" />

                    <span className="text nav-test">Airdropper</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                    <img src="images/menu.png" className="icon" alt="" />

                    <span className="text nav-test">More Products</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bottom-content">
              <li className=""></li>
              <li className="mode">
                <div className="moon-sun">
                  <i className="bx bx-moon icon moon"></i>
                  <i className="bx bx-sun icon sun"></i>
                </div>
                {/* <!-- <span className="mode-text text">Dark Mode</span> --> */}

                <div className="toggle-switch">
                  <span className="switch"></span>
                </div>
              </li>
              <ul className="menu-links">
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-telegram social_media"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-twitter social_media"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-instagram social_media"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-dribbble social_media"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*  */}
        <div className="form-block">
          <div className="top-nav">
            <ul className="breadcrumb">
              <li>Exchange</li>
              <li></li>
              <li>
                <a href="#" className="active">
                  Swap
                </a>
              </li>
            </ul>
            <p>Make a swap at no cost</p>
          </div>

          <div className="top-right-nav">
            <button className="button_name">
              <img className="icon-001" src="assets/images/mask group.png" />{" "}
              0xdd....ahs4
              <img className="icon-002" src="assets/images/bullet.jpeg" />{" "}
            </button>
            <a href="">
              <img src="assets/images/notification-bing.png" />
            </a>
            {/* <a href="">
              <img src="assets/images/setting-2.png" />
            </a> */}
          </div>

          <div className="clear"></div>
          {/* content1 slider */}

          {/* content1 slider */}
          <div className="clear"></div>

          {/* content */}

          <div className="outer_box">
            <div className="In_box">
              <div class="box_1 clear">
                <div class="img_top_right fl-left">
                  <img src="/img/Vector (3).png" alt="" />
                </div>

                <div class="img_top_right_title fl-right">
                  <p>Arbor Project</p>

                  <span class="inner_img_top_right_button">Private</span>

                  <div class="img_top_right_button clear">
                    <div class="img_bottom_right_title top_back">
                      <span>private</span>
                      <span>private</span>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>

              <div className="box2 clear">
                <div className="middle-title-left fl-left">Soft/Hard Cap</div>
                <div className="middle-title-right fl-right">
                  {" "}
                  <img src="/img/RIP.png" alt="" className="rip" /> 240,000
                </div>
              </div>
              <div className="box3 clear">
                <div className="middle-title-left_ti fl-left">120,000 RBA</div>
                <div className="middle-title-right_ti fl-right">
                  240,000 RBA
                </div>
              </div>

              <div className="box4 clear">
                <div className="middle-title-left_ti fl-left">Liquidity %</div>
                <div className="middle-title-right_ti fl-right">
                  Lockup Period
                </div>
              </div>
              <div className="box5 clear">
                <div className="middle-title-left_bi fl-left">
                  <span>70</span> of 100
                </div>
                <div className="middle-title-right_bi fl-right">140 Days</div>
              </div>
              <div className="box6 clear">
                <div className="bottom-title-left_bi fl-left">Ends in</div>
                <div className="bottom-title-right_bi fl-right">
                  02h : 45Min : 40s
                </div>
              </div>
            </div>
            <div className="clear"></div>
            <div className="In_box">
              <div class="box_1 clear">
                <div class="img_top_right fl-left">
                  <img src="/img/Vector (3).png" alt="" />
                </div>

                <div class="img_top_right_title fl-right">
                  <p>Arbor Project</p>

                  <span class="inner_img_top_right_button">Private</span>

                  <div class="img_top_right_button clear">
                    <div class="img_bottom_right_title top_back">
                      <span>private</span>
                      <span>private</span>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>

              <div className="box2 clear">
                <div className="middle-title-left fl-left">Soft/Hard Cap</div>
                <div className="middle-title-right fl-right">
                  {" "}
                  <img src="/img/RIP.png" alt="" className="rip" /> 240,000
                </div>
              </div>
              <div className="box3 clear">
                <div className="middle-title-left_ti fl-left">120,000 RBA</div>
                <div className="middle-title-right_ti fl-right">
                  240,000 RBA
                </div>
              </div>

              <div className="box4 clear">
                <div className="middle-title-left_ti fl-left">Liquidity %</div>
                <div className="middle-title-right_ti fl-right">
                  Lockup Period
                </div>
              </div>
              <div className="box5 clear">
                <div className="middle-title-left_bi fl-left">
                  <span>70</span> of 100
                </div>
                <div className="middle-title-right_bi fl-right">140 Days</div>
              </div>
              <div className="box6 clear">
                <div className="bottom-title-left_bi fl-left">Ends in</div>
                <div className="bottom-title-right_bi fl-right">
                  02h : 45Min : 40s
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
