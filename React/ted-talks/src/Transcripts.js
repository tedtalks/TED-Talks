import React from 'react';
import './Transcripts.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import Slider from 'react-slick';
import sentiment0 from './img/sentiment0.png';
import sentiment1 from './img/sentiment1.png';
import sentiment2 from './img/sentiment2.png';
import sentiment3 from './img/sentiment3.png';
import svd0 from './img/0SVD.png';
import svd1 from './img/1SVD.png';
import svd2 from './img/2SVD.png';
import svdAndMean from './img/2svd_and_mean.png';
import top10profiles from './img/top10profiles.png';

const transcripts = [
  {name: 'Talks with transcripts', value: 2022},
  {name: 'Talks without transcripts', value: 88}
];

const colors = ['#8586D2', '#929292'];

const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  // nextArrow: <SampleNextArrow className="nextArrow" />,
  // prevArrow: <SamplePrevArrow className="prevArrow" />
};

const Transcripts = () =>
  <div className="transcriptsContent">
    <div className="title">Transcript analysis</div>
    <div className="space"/>
    <div className="tagText">
      <div className="smallTitle">Cleaning the data</div>
      <div>After creating a better representation of all the transcripts we got 88 talks without a legitimate transcript and over 2000 with transcripts.</div>
      <div>In order to make this more valid, we're going to exclude all talks with less than 1000 words, so that the analysis
        we conduct will have more validity. This brings us down to 2022 talks, with new statistics.</div>
      <PieChart width={1200} height={400}>
        <Pie data={transcripts} cx={250} cy={200} innerRadius={80} outerRadius={160} fill="#8884d8" label>
          {
            transcripts.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)
          }
        </Pie>
        <Tooltip/>
      </PieChart>
      <div className="space"/>
      <div className="smallTitle">Analyzing a few transcripts</div>
      <div className="space"/>
      <Slider {...settings}>
        <div className="centeredTitle">
          <img src={sentiment0} width={1000} height={600} className="img" alt="" />
        </div>
        <div className="centeredTitle">
          <img src={sentiment1} width={1000} height={600} className="img" alt="" />
        </div>
        <div className="centeredTitle">
          <img src={sentiment2} width={1000} height={600} className="img" alt="" />
        </div>
        <div className="centeredTitle">
          <img src={sentiment3} width={1000} height={600} className="img" alt="" />
        </div>
      </Slider>
      <div className="space"/><div className="space"/>
      <img src={svdAndMean} width={1000} height={600} className="img" alt="" />
      <div className="space"/>
      <div>Let's inspect these one by one.</div>
      <div className="space"/>
      <div>The first line contains the overall, major plotline of a TED talk: </div>
      <div className="space"/>
      <img src={svd0} width={1000} height={600} className="img" alt="" />
      <div className="space"/>
      <div>There's a rise, a short fall, a rise, a fall, rise, and major fall. This follows a broad "Icarus" storyline:
        arise, then a general fall. This is the core shape of almost every ted talk. The variances are explained by the
        next singular components.</div>
      <div className="space"/>
      <div>The next overlay seems to be a short rise, followed by a fall. A major fall.
        However, this is a redeeming rise: this rise-fall-rise is a "Cinderella" pattern, evident in the stories
        TED speakers tell when they tell of a tragedy that befell them, and then a strategy they used to recover.</div>
      <img src={svd1} width={1000} height={600} className="img" alt="" />
      <div className="space"/>
      <div>3 is a "rise-fall" pattern.</div>
      <div className="space"/>
      <img src={svd2} width={1000} height={600} className="img" alt="" />
      <div className="space"/>
      <div>The rest devolve into sine waves, which is a replication of [1].
        They also discovered this in their singular values. </div>
      <div className="space"/>
      <div className="smallTitle">Profiles of popular talks</div>
      <div className="topic">10 most popular talks</div>
      <div className="space"/>
      <img src={top10profiles} width={1000} height={600} className="img" alt="" />
    </div>
  </div>;

export default Transcripts;