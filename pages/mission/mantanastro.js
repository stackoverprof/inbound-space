import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
    
const MantanAstro = () => {
    const [screen, setScreen] = useState(undefined)
    const [planet, setplanet] = useState("invalid")
    const handleWindowSizeChange = () => setScreen(window.innerWidth)

    useEffect(() => {
        setScreen(window.innerWidth)
        window.addEventListener('resize', handleWindowSizeChange)
    }, [])
    
    function changeCard(e){
        setplanet(e.target.value)
    }

    return (
        <Wrapper planet={planet} screen={screen}>
            <div className="container-all">
                <div className="texts">
                    <h3>MANTAN ASTRONAUT</h3>
                    <p>Kamu akan dibimbing seorang mantan astronot sepanjang misimu (non-teknis) Cari tahu siapa orangnya di {screen < 1068 ? "bawah":"samping"}!</p>
                    <p className="greener">(segera invite ke grup team)</p>
                </div>
                <div className="card-con">
                    <select name="teamname" id="" onChange={(e) => changeCard(e)}>
                        <option disabled selected value="invalid">PILIH TEAM</option>
                        <option value="merkurius">MERKURIUS</option>
                        <option value="venus">VENUS</option>
                        <option value="mars">MARS</option>
                        <option value="jupiter">JUPITER</option>
                        <option value="saturnus">SATURNUS</option>
                        <option value="uranus">URANUS</option>
                        <option value="neptunus">NEPTUNUS</option>
                        <option value="pluto">PLUTO</option>
                    </select>
                    <div className="swipe-card"></div>
                    <div className="btn-continue">
                        <Link href="/mission/finale"><button className="btn-regular"><p>CONTINUE</p><svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 13.2679C27.3333 14.0377 27.3333 15.9622 26 16.732L3.5 29.7224C2.16667 30.4922 0.499999 29.53 0.499999 27.9904L0.5 2.00962C0.5 0.470019 2.16667 -0.492234 3.5 0.277567L26 13.2679Z" fill="#180F4A"/></svg></button></Link>
                    </div>
                      
                </div>
            </div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({planet, screen}) =>`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    
    background-image: url('/img/mission/bg-crewmate.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .btn-continue{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .btn-regular{
        margin-top: 32px;
        padding: 8px 8px;
        
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid #FFF;
        padding-left: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s;
        
        p{
            margin: 0 12px 2px 0;
            font-family: 'Exo2-med';
            font-style: normal;
            font-weight: bold;
            font-size: 28px;
            line-height: 34px;
            color: #180F4A;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            display: inline;
        }
    }

    .swipe-card{
        width: 350px;
        height: 216.98px;

        background: url('/img/mission/intel/${planet}.svg'), url('/img/mission/intel/${planet == "invalid" ? "invalidcard":"card"}.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: 24px;
        filter: drop-shadow(0px 0px 32px #000000);
    }
    select{
        background: #050216 url('/img/customselect.svg');
        background-size: contain;
        background-position: right;
        background-repeat: no-repeat;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 10px;
        width: 350px;
        padding: 8px 12px;
        color: white;

        
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';

        font-family: 'Exo2-reg';
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 34px;

        color: #FFFFFF;
        
        &:focus{
            outline: none;
        }
    }
    option{
        margin: 8px 0;
    }

    .container-all{
        max-width: 956px;
        width: 70%;
        height: 100%;

        display: flex;
        justify-content: ${screen < 1068 ? 'flex-start' : 'space-between'};
        align-items: center;
        ${screen < 1068 ? "flex-direction: column;" : "" }
        
        .texts{
            width: ${screen < 1068 ? "350px":"542px"};
            margin-bottom: 20px;
            ${screen < 1068 ? "text-align: center;" : "" }

            h3{
                font-family: 'Exo2-reg';
                font-style: normal;
                font-weight: bold;
                font-size: ${screen < 1068 ? "29px" : "37px"};
                line-height: 44px;
                margin-top: ${screen < 1068 ? "52px" : 0};

                color: #4C973A;
            }
            p{
                font-family: 'Exo2-reg';
                font-style: normal;
                font-weight: normal;
                font-size: ${screen < 1068 ? '18px' : '28px'};
                line-height: ${screen < 1068 ? '28px' : '34px'};

                color: #FFFFFF;
            }
            .greener{
                color: #B1D28A;
            }
        }
    }
`)
    
export default MantanAstro