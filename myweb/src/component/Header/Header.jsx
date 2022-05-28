import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className=' header grid grid-cols-12 items-center justify-between mx-auto'>
        <ul className=' header_menu col-span-6'>
            <li className='header_menu-nav' >
                <a href="">Trang Chủ</a>
            </li>
            <li className='header_menu-nav'>
                <a href="">Sản Phẩm <i class="fa-solid fa-angle-down"></i></a>
            </li>
            <li className='header_menu-nav'>
                <a href="">Khuyến Mãi</a>
            </li>
            <li className='header_menu-nav'>
                <a href="">Tin Tức</a>
            </li>
            <li className='header_menu-nav'>
                <a href="">Liên Hệ</a>
            </li>
        </ul>
        <div className="col-span-3 header_logo">
            <div className="header_logo-image">
                <img src="https://lh3.googleusercontent.com/fife/AAWUweUS9bAH6oBUITL3rML7FggEipU-x7YeaCBdB-a1f_b2UeT5BenVN3RU3GhrEJ6yeEia6bjyavm3TDPDhEYR7cwYVEt0ymV4B4Gu5oretnxpDclwbHqk78K-dGClpXTziBNCvvECYicunp_I-ZxrYO0XXPmXeSDWHynYsnlQZtRbOR4Gv7yZE02xuyotdOVhVstFI3kXsvxN0Hr0ilgm_eXOEIU28EH4hJk2MMs9Rtnneuoo8_DJWDKfB6zbIDIKdGqD1IISfCbTPBBdOooxG8ZPhk3igCXOKm1u9y-U9Ew64DokhnjYSK8X3Nb3ip4o2r86NoUC2p5agTDvtKK2GuVcgSnaWAwU6O0VREQ5M6Va2bXYH2o-lzbJ07wLh8DxhQK2jhStsy0ecktGd1mJ-6PKsLYugDeWPgHxoiXc97iS5sNXmsV12aTKiuLu6Q6OVNffXbDVZyxSRlL4Z75y1usUArp2J_pvUBEXD99z8GFibHPNLH_6Ge1luD5hn4xDi1jMXhH82bP6-glmqta44vVGGcMuyKXCWhg0gof3cYWH88XxQMCRCQV-CCfyzs3vBHBe_q-5qu7VQ1G5YzsDOpwC6X2e2EoRqpEx608Jfx4TcoWK3aT0SgCfQ9iM3gU7Q_8joQGvWz0PhgD_cC8x91Zw8RsrKSFIzPlqg4wl_outHt7fDjNoSY2BwNYFUOQt44W5ndUbCiVJ9slhLEosEbiC67vbdedIp_tDBd6dDF2AiO0Z91SiGQOZHfydct5rfmUjPpXHtnQ_plVSrHmyO6ww1fOgDB6LKIRyy6EKuelp9hrSrXReKAXcDIwC5GPKrk_0S7ivelUocSlUUdYLjQ_dNOEU5jbDX2xWBbgx7obamh8ZK_vLv1Cw3LMezeV0E7xU8p25m1BcixHl5f8nlIC-auCsKfYe6x3G0NcJkVlJxqJ8sGOVbLZ1FIHq8DiGstiI-99UFSHLhIyV0QEHLfJ4p9xx5sHN1Km7cRFz9qNUT2IuI8zjf937RE92e8y2_irWDIePMpXLzSUKALrntRJ2Y8pMl7SfdNJx2fzyGaqvJVZeGW8021Fgukahd-xu9kd3vgdqI4V14G966m25WGXpb3KHfE9be9PpAEHZPbRIRgIFR497aFfHVe88eNmS95UDXAHyEouxXaR0_YRZkaq--Ty9QkRpKB5y4ReALMgkNkz2CUXQq0ixgNzQ_SJ6GiK0EygdfHV6_MzNXrTi44Zq9sfCDkdduenG4EOEclCNR-0b8ItCUxOtKM_Mpv4imo-zAKYG8HF8gCKCEnZO9CyBTzIg9uAoPR33f-U9uPbQDMdXcJ1KNDMdvYYXfuoHCgpSkw-A3s82Rfi4k4eBjPZFEwSgxNJ3a8M9r1HODf4-vr1Wj7lPZxvp8Xcug13UcU33A9EybUCGDxhjwoqK1lOvsxsVP8HRiWZYIZA2vopmk8acmlLp2qU=w250-h238-p-k-nu" alt="anh" />
            </div>
        </div>
        <div className="col-span-3 header_option">
            <div className="header_option-item border-r border-zinc-400">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="header_option-item border-r border-zinc-400">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="header_option-item ">
                <i class="fa-solid fa-user"></i>
            </div>
        </div>
    </div>
  )
}

export default Header