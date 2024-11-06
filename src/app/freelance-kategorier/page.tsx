import Link from "next/link";
import Image from "next/image";

import dotWave from '../assets/dotwave.png';
import dotWaveGreen from '../assets/dotwavegreen.png';
import stripe from '../assets/stripe.png';

export default function Home() {
  return (
    <>
      <div className="priser__hero__container">
        <div className="priser__hero__indhold">
          <h1 className="home__hero__h1">Find din næste <span className="home__hero__h1__span">freelancer</span> hos Workflow</h1>
          <p className="home__hero__p">Vælg en kategori nedenfor, for at søge i Workflows freelancere</p>
          <div className="home__hero__cta">
            <div className="component__howitworks__container">
              <svg xmlns="http://www.w3.org/2000/svg" className="component__howitworks__icon" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
              </svg>
              <p className="component__howitworks__p">Hvordan virker Workflow?</p>
            </div>
          </div>
        </div>
        <div className="home__hero__background">
          <Image src={dotWave} className="home__hero__background__image" alt="" width={1200} />
        </div>
      </div>
      <h2 className="cards__heading">Populære kategorier</h2>
      <div className="cards__container">
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="m23.109,15.134l-8.812-3.999c-.91-.308-1.898-.079-2.575.598-.693.692-.903,1.69-.544,2.712l3.944,8.675c.238.523.763.868,1.347.879h.019c.571,0,1.085-.317,1.342-.829l1.776-3.553,3.554-1.776c.514-.258.839-.795.829-1.369-.01-.575-.355-1.101-.879-1.338Zm-.397,1.812l-3.851,1.925-1.925,3.851c-.086.171-.245.278-.436.278-.191-.003-.388-.119-.467-.294l-3.927-8.633c-.215-.617-.098-1.212.324-1.633.28-.281.65-.433,1.048-.433.177,0,.36.03.542.093l8.675,3.944c.174.079.289.254.292.445s-.105.371-.276.457ZM12,0c-.005,0-.01,0-.016,0,0,0,0,0-.001,0C5.374.009,0,5.389,0,12s5.383,12,12,12c.174,0,.348-.004.521-.011.276-.012.49-.245.479-.521-.012-.275-.25-.496-.52-.479-.092.004-.185.007-.277.008-.568-.57-2.737-2.87-4.089-5.998h1.387c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1.778c-.437-1.245-.722-2.594-.722-4s.285-2.755.723-4h8.557c.182.518.338,1.055.457,1.605.051.234.258.395.488.395.035,0,.07-.003.106-.011.27-.058.441-.324.383-.594-.103-.477-.231-.942-.377-1.395h4.91c.486,1.24.753,2.59.753,4,0,.16-.003.319-.01.478-.012.276.202.509.478.521.282.026.51-.201.521-.478.008-.173.011-.347.011-.522C24,5.383,18.617,0,12,0ZM1,12c0-1.41.267-2.76.753-4h4.905c-.402,1.246-.658,2.591-.658,4s.256,2.754.658,4H1.753c-.486-1.24-.753-2.59-.753-4Zm6.019,5c1.066,2.669,2.723,4.785,3.743,5.93-3.737-.42-6.914-2.72-8.559-5.93h4.816Zm0-10H2.203C3.848,3.79,7.025,1.49,10.763,1.07c-1.02,1.145-2.677,3.261-3.743,5.93Zm1.096,0c1.224-2.829,3.117-4.984,3.885-5.79.77.807,2.665,2.963,3.888,5.79h-7.773Zm8.86,0c-1.068-2.672-2.722-4.786-3.74-5.93,3.738.42,6.915,2.72,8.561,5.93h-4.821Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Webbureau</p>
            </div>
        </Link>
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="M23.72,9.39c.19,.85,.28,1.73,.28,2.61,0,6.62-5.38,12-12,12S0,18.62,0,12,5.38,0,12,0c.88,0,1.76,.1,2.61,.28,.27,.06,.44,.33,.38,.6-.06,.27-.33,.44-.6,.38-.78-.17-1.59-.26-2.39-.26C5.93,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11c0-.81-.09-1.61-.26-2.39-.06-.27,.11-.54,.38-.6,.27-.06,.54,.11,.6,.38ZM13.4,5.14c.27,.05,.53-.12,.59-.39,.05-.27-.12-.53-.39-.59-.52-.11-1.06-.16-1.6-.16-4.41,0-8,3.59-8,8s3.59,8,8,8,8-3.59,8-8c0-.54-.05-1.08-.16-1.6-.05-.27-.32-.44-.59-.39-.27,.06-.45,.32-.39,.59,.09,.46,.14,.93,.14,1.4,0,3.86-3.14,7-7,7s-7-3.14-7-7,3.14-7,7-7c.47,0,.94,.05,1.4,.14Zm-1.83,3.89c.27-.04,.46-.29,.42-.57s-.29-.47-.57-.42c-1.96,.28-3.43,1.98-3.43,3.96,0,2.21,1.79,4,4,4,1.98,0,3.68-1.47,3.96-3.43,.04-.27-.15-.53-.42-.57-.27-.04-.53,.15-.57,.42-.21,1.47-1.49,2.57-2.97,2.57-1.65,0-3-1.35-3-3,0-1.48,1.1-2.76,2.57-2.97Zm4.43-1.74v-2.96c0-.67,.26-1.3,.73-1.77L19.15,.15c.14-.14,.36-.19,.54-.11,.19,.08,.31,.26,.31,.46v3.5h3.5c.2,0,.38,.12,.46,.31,.08,.19,.03,.4-.11,.54l-2.41,2.41c-.47,.47-1.1,.73-1.77,.73h-2.96l-4.35,4.35c-.1,.1-.23,.15-.35,.15s-.26-.05-.35-.15c-.2-.2-.2-.51,0-.71l4.35-4.35Zm1-.29h2.67c.4,0,.78-.16,1.06-.44l1.56-1.56h-2.79c-.28,0-.5-.22-.5-.5V1.71l-1.56,1.56c-.28,.28-.44,.66-.44,1.06v2.67Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Marketing</p>
            </div>
        </Link>
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="m0,9.5c0-.276.224-.5.5-.5h5c.276,0,.5.224.5.5s-.224.5-.5.5H.5c-.276,0-.5-.224-.5-.5Zm24,1v5c0,1.496-.944,2.776-2.268,3.276.176.384.268.798.268,1.224,0,1.654-1.346,3-3,3s-3-1.346-3-3c0-.344.06-.681.176-1H7.824c.116.319.176.656.176,1,0,1.654-1.346,3-3,3s-3-1.346-3-3c0-.426.092-.84.268-1.224-1.324-.5-2.268-1.78-2.268-3.276v-3c0-.276.224-.5.5-.5s.5.224.5.5v3c0,1.378,1.121,2.5,2.5,2.5h12.5V5.5c0-1.93-1.57-3.5-3.5-3.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c2.481,0,4.5,2.019,4.5,4.5v.5h2.5c2.481,0,4.5,2.019,4.5,4.5Zm-7-3.5v5h6v-1.5c0-1.93-1.57-3.5-3.5-3.5h-2.5Zm-10.277,12h-3.223c-.073,0-.146-.003-.219-.007-.185.309-.281.652-.281,1.007,0,1.103.897,2,2,2s2-.897,2-2c0-.352-.095-.693-.277-1Zm13.996-.007c-.072.005-.145.007-.219.007h-3.223c-.182.307-.277.648-.277,1,0,1.103.897,2,2,2s2-.897,2-2c0-.355-.097-.698-.281-1.007Zm2.281-3.493v-2.5h-6v5h3.5c1.379,0,2.5-1.122,2.5-2.5ZM.5,2h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5Zm0,4h7c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Transport</p>
            </div>
        </Link>
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                <path d="m23.949,9.603c0-1.637-1.318-2.971-2.949-2.999V.5c0-.262-.202-.479-.463-.499-.258-.018-.492.166-.532.425-.482,3.226-4.746,3.574-6.557,3.574h-7.949C2.467,4,0,6.467,0,9.5c0,1.651.738,3.134,1.904,4.143l3.247,8.713c.229.627.688,1.128,1.293,1.41.336.156.694.235,1.054.235.289,0,.579-.051.858-.153,1.295-.472,1.964-1.91,1.493-3.204l-2.046-5.644h5.698c2.207,0,5.987.465,6.507,3.582.041.243.25.418.493.418.014,0,.028,0,.042-.001.259-.021.459-.238.459-.499v-5.899c1.631-.028,2.949-1.362,2.949-2.999Zm-22.949-.103c0-2.481,2.019-4.5,4.5-4.5h2.5v9h-2.449c-2.51,0-4.551-2.019-4.551-4.5Zm7.909,11.486c.137.376.12.784-.049,1.146-.169.363-.47.639-.846.776-.779.284-1.64-.119-1.924-.899l-2.788-7.482c.688.303,1.449.473,2.25.473h1.187l2.17,5.986Zm11.091-4.737c-1.229-1.451-3.478-2.249-6.5-2.249h-4.5V5h4.449c3.057,0,5.321-.788,6.551-2.223v13.472Zm1-4.648v-3.997c1.079.027,1.949.913,1.949,1.999s-.869,1.971-1.949,1.999Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Reklame</p>
            </div>
        </Link>
      </div>
      <div className="cards__container">
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="m18.293,19l-1.646,1.646.707.707,1.646-1.646,1.646,1.646.707-.707-1.646-1.646,1.646-1.646-.707-.707-1.646,1.646-2.379-2.379c-1.045-1.045-1.621-2.436-1.621-3.914s.576-2.869,1.621-3.914l2.379-2.379,1.646,1.646.707-.707-1.646-1.646,1.396-1.396-.707-.707-1.396,1.396-1.646-1.646-.707.707,1.646,1.646-2.379,2.379c-1.045,1.045-2.436,1.621-3.914,1.621s-2.869-.576-3.914-1.621l-2.379-2.379,1.646-1.646-.707-.707-1.646,1.646-1.646-1.646-.707.707,1.646,1.646-1.646,1.646.707.707,1.646-1.646,2.379,2.379c1.045,1.045,1.621,2.436,1.621,3.914s-.576,2.869-1.621,3.914l-2.379,2.379-1.646-1.646-.707.707,1.646,1.646-1.646,1.646.707.707,1.646-1.646,1.646,1.646.707-.707-1.646-1.646,2.379-2.379c1.045-1.045,2.436-1.621,3.914-1.621s2.869.576,3.914,1.621l2.379,2.379Zm-6.293-5c-.868,0-1.71.169-2.49.49.321-.779.49-1.621.49-2.49s-.169-1.71-.49-2.49c.779.321,1.621.49,2.49.49s1.71-.169,2.49-.49c-.321.779-.49,1.621-.49,2.49s.169,1.71.49,2.49c-.779-.321-1.621-.49-2.49-.49ZM0,5C0,2.243,2.243,0,5,0s5,2.243,5,5c0,.428-.071.837-.173,1.234-.111-.087-.226-.168-.327-.269l-.543-.543c.015-.141.043-.278.043-.422,0-2.206-1.794-4-4-4S1,2.794,1,5s1.794,4,4,4c.144,0,.281-.028.422-.043l.543.543c.101.101.182.217.269.327-.397.102-.806.173-1.234.173C2.243,10,0,7.757,0,5Zm14.173,1.234c-.102-.397-.173-.806-.173-1.234,0-2.757,2.243-5,5-5s5,2.243,5,5-2.243,5-5,5c-.428,0-.837-.071-1.234-.173.087-.111.168-.226.269-.327l.543-.543c.141.015.278.043.422.043,2.206,0,4-1.794,4-4s-1.794-4-4-4-4,1.794-4,4c0,.144.028.281.043.422l-.543.543c-.101.101-.217.182-.327.269Zm-4.345,11.532c.102.397.173.806.173,1.234,0,2.757-2.243,5-5,5S0,21.757,0,19s2.243-5,5-5c.428,0,.837.071,1.234.173-.087.111-.168.226-.269.327l-.543.543c-.141-.015-.278-.043-.422-.043-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4c0-.144-.028-.281-.043-.422l.543-.543c.101-.101.217-.182.327-.269Zm14.173,1.234c0,2.757-2.243,5-5,5s-5-2.243-5-5c0-.428.071-.837.173-1.234.111.087.226.168.327.269l.543.543c-.015.141-.043.278-.043.422,0,2.206,1.794,4,4,4s4-1.794,4-4-1.794-4-4-4c-.144,0-.281.028-.422.043l-.543-.543c-.101-.101-.182-.217-.269-.327.397-.102.806-.173,1.234-.173,2.757,0,5,2.243,5,5Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Dronefoto</p>
            </div>
        </Link>
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="m24,4.5v6c0,2.481-2.019,4.5-4.5,4.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c1.93,0,3.5-1.57,3.5-3.5v-6c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v6c0,1.93,1.57,3.5,3.5,3.5.276,0,.5.224.5.5s-.224.5-.5.5c-2.481,0-4.5-2.019-4.5-4.5v-6C0,2.019,2.019,0,4.5,0h15c2.481,0,4.5,2.019,4.5,4.5Zm-5.146,18.646c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-2.984-2.984c-.862.706-1.964,1.13-3.162,1.13-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5c0,1.199-.424,2.3-1.131,3.163l2.984,2.984Zm-6.854-2.146c2.206,0,4-1.794,4-4s-1.794-4-4-4-4,1.794-4,4,1.794,4,4,4Zm4.614-11c.244,0,.471-.151.601-.4l.831-1.6.831,1.6c.129.249.356.4.601.4.368,0,.675-.339.706-.779l.314-3.659c.026-.302-.212-.562-.515-.562h-.002c-.27,0-.495.208-.516.477l-.21,2.681-.75-1.443c-.193-.372-.725-.372-.918,0l-.75,1.443-.212-2.681c-.021-.269-.246-.477-.516-.477-.303,0-.541.26-.515.562l.314,3.659c.031.44.337.779.706.779Zm-6,0c.244,0,.471-.151.601-.4l.831-1.6.831,1.6c.129.249.356.4.601.4.368,0,.675-.339.706-.779l.314-3.659c.026-.302-.212-.562-.515-.562h-.002c-.27,0-.495.208-.516.477l-.21,2.681-.75-1.443c-.193-.372-.725-.372-.918,0l-.75,1.443-.212-2.681c-.021-.269-.246-.477-.516-.477-.303,0-.541.26-.515.562l.314,3.659c.031.44.337.779.706.779Zm-3.136,0c.368,0,.675-.339.706-.779l.314-3.659c.026-.302-.212-.562-.515-.562h-.002c-.27,0-.495.208-.516.477l-.21,2.681-.75-1.443c-.193-.372-.725-.372-.918,0l-.75,1.443-.212-2.681c-.021-.269-.246-.477-.516-.477-.303,0-.541.26-.515.562l.314,3.659c.031.44.337.779.706.779.244,0,.471-.151.601-.4l.831-1.6.831,1.6c.129.249.356.4.601.4Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Google SEO</p>
            </div>
        </Link>
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="M9,12c-3.309,0-6-2.691-6-6S5.691,0,9,0s6,2.691,6,6-2.691,6-6,6Zm0-11c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5S11.757,1,9,1ZM1,23.5v-.5c0-4.233,3.307-7.741,7.529-7.986,.276-.016,.486-.252,.47-.528-.016-.275-.251-.502-.528-.47C3.721,14.291,0,18.237,0,23v.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5Zm16.5,.5c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5,6.5,2.916,6.5,6.5-2.916,6.5-6.5,6.5Zm0-12c-3.033,0-5.5,2.468-5.5,5.5s2.467,5.5,5.5,5.5,5.5-2.468,5.5-5.5-2.467-5.5-5.5-5.5Zm.635,7.464l2.703-2.614c.198-.192,.204-.509,.012-.707-.191-.198-.507-.203-.707-.012l-2.706,2.618c-.336,.331-.885,.333-1.223,.004l-1.363-1.345c-.196-.194-.513-.192-.707,.004-.194,.197-.192,.514,.005,.707l1.364,1.347c.362,.354,.837,.531,1.312,.531s.951-.178,1.311-.533Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Revisor</p>
            </div>
        </Link>
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="M24,7.64v8.666c0,.635-.353,1.206-.92,1.489-.238,.119-.493,.177-.747,.177-.353,0-.702-.113-.997-.334l-2.336-2.327v.19c0,2.481-2.019,4.5-4.5,4.5H4.5c-2.481,0-4.5-2.019-4.5-4.5v-7c0-2.481,2.019-4.5,4.5-4.5H14.5c2.481,0,4.5,2.019,4.5,4.5v.157l2.281-2.301c.563-.428,1.23-.489,1.799-.205,.568,.284,.92,.854,.92,1.489Zm-6,.86c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v7c0,1.93,1.57,3.5,3.5,3.5H14.5c1.93,0,3.5-1.57,3.5-3.5v-7Zm5-.86c0-.257-.138-.48-.368-.595-.23-.115-.491-.091-.697,.062l-2.936,2.97v3.821l2.989,2.986c.152,.108,.412,.133,.643,.017,.23-.115,.368-.337,.368-.595V7.64Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Mediebureau</p>
            </div>
        </Link>
      </div>
      <h2 className="cards__heading">IT & Teknologi</h2>
      <div className="cards__container">
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="m23.109,15.134l-8.812-3.999c-.91-.308-1.898-.079-2.575.598-.693.692-.903,1.69-.544,2.712l3.944,8.675c.238.523.763.868,1.347.879h.019c.571,0,1.085-.317,1.342-.829l1.776-3.553,3.554-1.776c.514-.258.839-.795.829-1.369-.01-.575-.355-1.101-.879-1.338Zm-.397,1.812l-3.851,1.925-1.925,3.851c-.086.171-.245.278-.436.278-.191-.003-.388-.119-.467-.294l-3.927-8.633c-.215-.617-.098-1.212.324-1.633.28-.281.65-.433,1.048-.433.177,0,.36.03.542.093l8.675,3.944c.174.079.289.254.292.445s-.105.371-.276.457ZM12,0c-.005,0-.01,0-.016,0,0,0,0,0-.001,0C5.374.009,0,5.389,0,12s5.383,12,12,12c.174,0,.348-.004.521-.011.276-.012.49-.245.479-.521-.012-.275-.25-.496-.52-.479-.092.004-.185.007-.277.008-.568-.57-2.737-2.87-4.089-5.998h1.387c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1.778c-.437-1.245-.722-2.594-.722-4s.285-2.755.723-4h8.557c.182.518.338,1.055.457,1.605.051.234.258.395.488.395.035,0,.07-.003.106-.011.27-.058.441-.324.383-.594-.103-.477-.231-.942-.377-1.395h4.91c.486,1.24.753,2.59.753,4,0,.16-.003.319-.01.478-.012.276.202.509.478.521.282.026.51-.201.521-.478.008-.173.011-.347.011-.522C24,5.383,18.617,0,12,0ZM1,12c0-1.41.267-2.76.753-4h4.905c-.402,1.246-.658,2.591-.658,4s.256,2.754.658,4H1.753c-.486-1.24-.753-2.59-.753-4Zm6.019,5c1.066,2.669,2.723,4.785,3.743,5.93-3.737-.42-6.914-2.72-8.559-5.93h4.816Zm0-10H2.203C3.848,3.79,7.025,1.49,10.763,1.07c-1.02,1.145-2.677,3.261-3.743,5.93Zm1.096,0c1.224-2.829,3.117-4.984,3.885-5.79.77.807,2.665,2.963,3.888,5.79h-7.773Zm8.86,0c-1.068-2.672-2.722-4.786-3.74-5.93,3.738.42,6.915,2.72,8.561,5.93h-4.821Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Webbureau</p>
            </div>
        </Link>
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="M23.72,9.39c.19,.85,.28,1.73,.28,2.61,0,6.62-5.38,12-12,12S0,18.62,0,12,5.38,0,12,0c.88,0,1.76,.1,2.61,.28,.27,.06,.44,.33,.38,.6-.06,.27-.33,.44-.6,.38-.78-.17-1.59-.26-2.39-.26C5.93,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11c0-.81-.09-1.61-.26-2.39-.06-.27,.11-.54,.38-.6,.27-.06,.54,.11,.6,.38ZM13.4,5.14c.27,.05,.53-.12,.59-.39,.05-.27-.12-.53-.39-.59-.52-.11-1.06-.16-1.6-.16-4.41,0-8,3.59-8,8s3.59,8,8,8,8-3.59,8-8c0-.54-.05-1.08-.16-1.6-.05-.27-.32-.44-.59-.39-.27,.06-.45,.32-.39,.59,.09,.46,.14,.93,.14,1.4,0,3.86-3.14,7-7,7s-7-3.14-7-7,3.14-7,7-7c.47,0,.94,.05,1.4,.14Zm-1.83,3.89c.27-.04,.46-.29,.42-.57s-.29-.47-.57-.42c-1.96,.28-3.43,1.98-3.43,3.96,0,2.21,1.79,4,4,4,1.98,0,3.68-1.47,3.96-3.43,.04-.27-.15-.53-.42-.57-.27-.04-.53,.15-.57,.42-.21,1.47-1.49,2.57-2.97,2.57-1.65,0-3-1.35-3-3,0-1.48,1.1-2.76,2.57-2.97Zm4.43-1.74v-2.96c0-.67,.26-1.3,.73-1.77L19.15,.15c.14-.14,.36-.19,.54-.11,.19,.08,.31,.26,.31,.46v3.5h3.5c.2,0,.38,.12,.46,.31,.08,.19,.03,.4-.11,.54l-2.41,2.41c-.47,.47-1.1,.73-1.77,.73h-2.96l-4.35,4.35c-.1,.1-.23,.15-.35,.15s-.26-.05-.35-.15c-.2-.2-.2-.51,0-.71l4.35-4.35Zm1-.29h2.67c.4,0,.78-.16,1.06-.44l1.56-1.56h-2.79c-.28,0-.5-.22-.5-.5V1.71l-1.56,1.56c-.28,.28-.44,.66-.44,1.06v2.67Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Marketing</p>
            </div>
        </Link>
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="m0,9.5c0-.276.224-.5.5-.5h5c.276,0,.5.224.5.5s-.224.5-.5.5H.5c-.276,0-.5-.224-.5-.5Zm24,1v5c0,1.496-.944,2.776-2.268,3.276.176.384.268.798.268,1.224,0,1.654-1.346,3-3,3s-3-1.346-3-3c0-.344.06-.681.176-1H7.824c.116.319.176.656.176,1,0,1.654-1.346,3-3,3s-3-1.346-3-3c0-.426.092-.84.268-1.224-1.324-.5-2.268-1.78-2.268-3.276v-3c0-.276.224-.5.5-.5s.5.224.5.5v3c0,1.378,1.121,2.5,2.5,2.5h12.5V5.5c0-1.93-1.57-3.5-3.5-3.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c2.481,0,4.5,2.019,4.5,4.5v.5h2.5c2.481,0,4.5,2.019,4.5,4.5Zm-7-3.5v5h6v-1.5c0-1.93-1.57-3.5-3.5-3.5h-2.5Zm-10.277,12h-3.223c-.073,0-.146-.003-.219-.007-.185.309-.281.652-.281,1.007,0,1.103.897,2,2,2s2-.897,2-2c0-.352-.095-.693-.277-1Zm13.996-.007c-.072.005-.145.007-.219.007h-3.223c-.182.307-.277.648-.277,1,0,1.103.897,2,2,2s2-.897,2-2c0-.355-.097-.698-.281-1.007Zm2.281-3.493v-2.5h-6v5h3.5c1.379,0,2.5-1.122,2.5-2.5ZM.5,2h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5Zm0,4h7c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Transport</p>
            </div>
        </Link>
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                <path d="m23.949,9.603c0-1.637-1.318-2.971-2.949-2.999V.5c0-.262-.202-.479-.463-.499-.258-.018-.492.166-.532.425-.482,3.226-4.746,3.574-6.557,3.574h-7.949C2.467,4,0,6.467,0,9.5c0,1.651.738,3.134,1.904,4.143l3.247,8.713c.229.627.688,1.128,1.293,1.41.336.156.694.235,1.054.235.289,0,.579-.051.858-.153,1.295-.472,1.964-1.91,1.493-3.204l-2.046-5.644h5.698c2.207,0,5.987.465,6.507,3.582.041.243.25.418.493.418.014,0,.028,0,.042-.001.259-.021.459-.238.459-.499v-5.899c1.631-.028,2.949-1.362,2.949-2.999Zm-22.949-.103c0-2.481,2.019-4.5,4.5-4.5h2.5v9h-2.449c-2.51,0-4.551-2.019-4.551-4.5Zm7.909,11.486c.137.376.12.784-.049,1.146-.169.363-.47.639-.846.776-.779.284-1.64-.119-1.924-.899l-2.788-7.482c.688.303,1.449.473,2.25.473h1.187l2.17,5.986Zm11.091-4.737c-1.229-1.451-3.478-2.249-6.5-2.249h-4.5V5h4.449c3.057,0,5.321-.788,6.551-2.223v13.472Zm1-4.648v-3.997c1.079.027,1.949.913,1.949,1.999s-.869,1.971-1.949,1.999Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Reklame</p>
            </div>
        </Link>
      </div>
      <h2 className="cards__heading">Juridisk</h2>
      <div className="cards__container">
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="m18.293,19l-1.646,1.646.707.707,1.646-1.646,1.646,1.646.707-.707-1.646-1.646,1.646-1.646-.707-.707-1.646,1.646-2.379-2.379c-1.045-1.045-1.621-2.436-1.621-3.914s.576-2.869,1.621-3.914l2.379-2.379,1.646,1.646.707-.707-1.646-1.646,1.396-1.396-.707-.707-1.396,1.396-1.646-1.646-.707.707,1.646,1.646-2.379,2.379c-1.045,1.045-2.436,1.621-3.914,1.621s-2.869-.576-3.914-1.621l-2.379-2.379,1.646-1.646-.707-.707-1.646,1.646-1.646-1.646-.707.707,1.646,1.646-1.646,1.646.707.707,1.646-1.646,2.379,2.379c1.045,1.045,1.621,2.436,1.621,3.914s-.576,2.869-1.621,3.914l-2.379,2.379-1.646-1.646-.707.707,1.646,1.646-1.646,1.646.707.707,1.646-1.646,1.646,1.646.707-.707-1.646-1.646,2.379-2.379c1.045-1.045,2.436-1.621,3.914-1.621s2.869.576,3.914,1.621l2.379,2.379Zm-6.293-5c-.868,0-1.71.169-2.49.49.321-.779.49-1.621.49-2.49s-.169-1.71-.49-2.49c.779.321,1.621.49,2.49.49s1.71-.169,2.49-.49c-.321.779-.49,1.621-.49,2.49s.169,1.71.49,2.49c-.779-.321-1.621-.49-2.49-.49ZM0,5C0,2.243,2.243,0,5,0s5,2.243,5,5c0,.428-.071.837-.173,1.234-.111-.087-.226-.168-.327-.269l-.543-.543c.015-.141.043-.278.043-.422,0-2.206-1.794-4-4-4S1,2.794,1,5s1.794,4,4,4c.144,0,.281-.028.422-.043l.543.543c.101.101.182.217.269.327-.397.102-.806.173-1.234.173C2.243,10,0,7.757,0,5Zm14.173,1.234c-.102-.397-.173-.806-.173-1.234,0-2.757,2.243-5,5-5s5,2.243,5,5-2.243,5-5,5c-.428,0-.837-.071-1.234-.173.087-.111.168-.226.269-.327l.543-.543c.141.015.278.043.422.043,2.206,0,4-1.794,4-4s-1.794-4-4-4-4,1.794-4,4c0,.144.028.281.043.422l-.543.543c-.101.101-.217.182-.327.269Zm-4.345,11.532c.102.397.173.806.173,1.234,0,2.757-2.243,5-5,5S0,21.757,0,19s2.243-5,5-5c.428,0,.837.071,1.234.173-.087.111-.168.226-.269.327l-.543.543c-.141-.015-.278-.043-.422-.043-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4c0-.144-.028-.281-.043-.422l.543-.543c.101-.101.217-.182.327-.269Zm14.173,1.234c0,2.757-2.243,5-5,5s-5-2.243-5-5c0-.428.071-.837.173-1.234.111.087.226.168.327.269l.543.543c-.015.141-.043.278-.043.422,0,2.206,1.794,4,4,4s4-1.794,4-4-1.794-4-4-4c-.144,0-.281.028-.422.043l-.543-.543c-.101-.101-.182-.217-.269-.327.397-.102.806-.173,1.234-.173,2.757,0,5,2.243,5,5Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Dronefoto</p>
            </div>
        </Link>
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="m24,4.5v6c0,2.481-2.019,4.5-4.5,4.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c1.93,0,3.5-1.57,3.5-3.5v-6c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v6c0,1.93,1.57,3.5,3.5,3.5.276,0,.5.224.5.5s-.224.5-.5.5c-2.481,0-4.5-2.019-4.5-4.5v-6C0,2.019,2.019,0,4.5,0h15c2.481,0,4.5,2.019,4.5,4.5Zm-5.146,18.646c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-2.984-2.984c-.862.706-1.964,1.13-3.162,1.13-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5c0,1.199-.424,2.3-1.131,3.163l2.984,2.984Zm-6.854-2.146c2.206,0,4-1.794,4-4s-1.794-4-4-4-4,1.794-4,4,1.794,4,4,4Zm4.614-11c.244,0,.471-.151.601-.4l.831-1.6.831,1.6c.129.249.356.4.601.4.368,0,.675-.339.706-.779l.314-3.659c.026-.302-.212-.562-.515-.562h-.002c-.27,0-.495.208-.516.477l-.21,2.681-.75-1.443c-.193-.372-.725-.372-.918,0l-.75,1.443-.212-2.681c-.021-.269-.246-.477-.516-.477-.303,0-.541.26-.515.562l.314,3.659c.031.44.337.779.706.779Zm-6,0c.244,0,.471-.151.601-.4l.831-1.6.831,1.6c.129.249.356.4.601.4.368,0,.675-.339.706-.779l.314-3.659c.026-.302-.212-.562-.515-.562h-.002c-.27,0-.495.208-.516.477l-.21,2.681-.75-1.443c-.193-.372-.725-.372-.918,0l-.75,1.443-.212-2.681c-.021-.269-.246-.477-.516-.477-.303,0-.541.26-.515.562l.314,3.659c.031.44.337.779.706.779Zm-3.136,0c.368,0,.675-.339.706-.779l.314-3.659c.026-.302-.212-.562-.515-.562h-.002c-.27,0-.495.208-.516.477l-.21,2.681-.75-1.443c-.193-.372-.725-.372-.918,0l-.75,1.443-.212-2.681c-.021-.269-.246-.477-.516-.477-.303,0-.541.26-.515.562l.314,3.659c.031.44.337.779.706.779.244,0,.471-.151.601-.4l.831-1.6.831,1.6c.129.249.356.4.601.4Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Google SEO</p>
            </div>
        </Link>
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="M9,12c-3.309,0-6-2.691-6-6S5.691,0,9,0s6,2.691,6,6-2.691,6-6,6Zm0-11c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5S11.757,1,9,1ZM1,23.5v-.5c0-4.233,3.307-7.741,7.529-7.986,.276-.016,.486-.252,.47-.528-.016-.275-.251-.502-.528-.47C3.721,14.291,0,18.237,0,23v.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5Zm16.5,.5c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5,6.5,2.916,6.5,6.5-2.916,6.5-6.5,6.5Zm0-12c-3.033,0-5.5,2.468-5.5,5.5s2.467,5.5,5.5,5.5,5.5-2.468,5.5-5.5-2.467-5.5-5.5-5.5Zm.635,7.464l2.703-2.614c.198-.192,.204-.509,.012-.707-.191-.198-.507-.203-.707-.012l-2.706,2.618c-.336,.331-.885,.333-1.223,.004l-1.363-1.345c-.196-.194-.513-.192-.707,.004-.194,.197-.192,.514,.005,.707l1.364,1.347c.362,.354,.837,.531,1.312,.531s.951-.178,1.311-.533Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Revisor</p>
            </div>
        </Link>
        <Link href="/freelance-kategorier/webbureau" className="cards__element">
            <div className="cards__element__icon__container">
                <svg xmlns="http://www.w3.org/2000/svg" className="cards__element__icon" viewBox="0 0 25 25">
                    <path d="M24,7.64v8.666c0,.635-.353,1.206-.92,1.489-.238,.119-.493,.177-.747,.177-.353,0-.702-.113-.997-.334l-2.336-2.327v.19c0,2.481-2.019,4.5-4.5,4.5H4.5c-2.481,0-4.5-2.019-4.5-4.5v-7c0-2.481,2.019-4.5,4.5-4.5H14.5c2.481,0,4.5,2.019,4.5,4.5v.157l2.281-2.301c.563-.428,1.23-.489,1.799-.205,.568,.284,.92,.854,.92,1.489Zm-6,.86c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v7c0,1.93,1.57,3.5,3.5,3.5H14.5c1.93,0,3.5-1.57,3.5-3.5v-7Zm5-.86c0-.257-.138-.48-.368-.595-.23-.115-.491-.091-.697,.062l-2.936,2.97v3.821l2.989,2.986c.152,.108,.412,.133,.643,.017,.23-.115,.368-.337,.368-.595V7.64Z"/>
                </svg>
            </div>
            <div className="cards__element__indhold">
                <p className="cards__element__indhold__heading">Mediebureau</p>
            </div>
        </Link>
      </div>
    </>
  );
}
