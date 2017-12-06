import React from 'react';
import entertainmentNetwork from './img/entertainment_network.png';
import healthNetwork from './img/health_network.png';
import scienceNetwork from './img/science_network.png';
import societyNetwork from './img/society_network.png';
import technologyNetwork from './img/technology_network.png';
import sentimentInTagCommunities from './img/sentimentInTagCommunities.png';
import './Tags.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Slider from 'react-slick';
import shouldUpdate from 'recompose/shouldUpdate';

const data = [
  {
    community: 'Science',
    meanHappiness: 6.21
  },
  {
    community: 'Technology',
    meanHappiness: 6.24
  },
  {
    community: 'Society',
    meanHappiness: 5.43
  },
  {
    community: 'Health',
    meanHappiness: 4.66
  },
  {
    community: 'Entertainment',
    meanHappiness: 6.80
  }
];

const columns = [
  {
    Header: 'Community',
    accessor: 'community'
  },
  {
    Header: 'Mean happiness',
    accessor: 'meanHappiness'
  }
];

const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  className: "slider"
};

const Tags = () =>
  <div className="tagContent">
    <div className="tagTitle"> Tag network analysis </div>
    <div className="space"/>
    <div className="tagText">
      <div className="smallTitle">Tags statistics</div>
      <div className="space"/>
      <div className="stats">
      <div className="circle">
        <div className="number">417</div>
        <div className="description">nodes</div>
      </div>
      <div className="circle">
        <div className="number">0.25</div>
        <div className="description">density</div>
      </div>
      <div className="circle">
        <div className="number">21708</div>
        <div className="description">edges</div>
      </div>
      <div className="circle">
        <div className="number">1</div>
        <div className="description">component</div>
      </div>
      </div>
      <div className="space"/>
      <div className="space"/>
      <div>
        So this graph is relatively highly connected, with a density of 25%.
        It has more edges than the original network, which is to be expected since its linking every tag to every tag
        each of it's neighbors links to.
      </div>
      <div className="space"/>
      <div className="smallTitle">Finding communities of tags</div>
      <div className="topic">Modularity </div>
      <div>Modularity of Louvian communities: 0.22</div>
      <div>
        This implies sub-optimal communities, which is expected due to the high density of our graph.
        However the existence of communities is still supported; the interpretation is that the communities provide 23%
        higher density than the density of the graph; considering that our network is very dense to begin with, having such
        a significant increase in density is impressive.
      </div>
      <div className="space"/>
      <div className="topic">Partitions </div>
      <div className="space"/>
      <Slider {...settings}>
        <div className="centeredTitle">Society network<div className="space"/>
          <img src={societyNetwork} width={1000} height={600} className="img" alt="" />
        </div>
        <div className="centeredTitle">Entertainment network <div className="space"/>
         <img src={entertainmentNetwork} width={1000} height={600} className="img" alt="" />
        </div>
        <div className="centeredTitle">Health network <div className="space"/>
         <img src={healthNetwork} width={1000} height={600} className="img" alt="" />
        </div>
        <div className="centeredTitle">Science network <div className="space"/>
         <img src={scienceNetwork} width={1000} height={600} className="img" alt="" />
        </div>
        <div className="centeredTitle">Technology network <div className="space"/>
         <img src={technologyNetwork} width={1000} height={600} className="img" alt="" />
        </div>
      </Slider>
      <div className="space"/><div className="space"/><div className="space"/>
      <div>
        These five networks represent the five underlying communities of talks.
        <div>
          All talks fall nicely into one of these categories,
          which gives us insight as to what people want to watch - and what an author should tag their video if they want to
          become successful.
        </div>
      </div>
      <div className="space"/>
      <div className="space"/>
      <div className="smallTitle">Tag sentiments</div>
      <div className="topic">Mean happiness</div>
      <div className="space"/>
      <ReactTable columns={columns} data={data} pageSize={5} showPagination={false} className="-striped -highlight" />
      <div className="space"/>
      <div>
        These average happiness values don't mean all that much by themselves. To statistically show that the averages were indeed
        different, we computed a T-Test. A higher T-statistic indicates more separation between the means, and the only
        shown values are values with a P-value of less than 0.005. In more casual terms, that means these results have a
        very high confidence. They are, with 99.995% confidence, not due to a fluke.
      </div>
      <div className="space"/>
      <div className="topic">Comparison matrix</div>
      <img src={sentimentInTagCommunities} width={800} height={700} alt="" className="sentimentImg"/>
      <div className="space"/>
      <div>Naturally, health, the most depressing of topics, has the lowest happiness, while the most "frivolous",
        entertainment, has the most. </div>
    </div>
  </div>;


const checkPropsChange = (props, nextProps) => nextProps !== props;

export default shouldUpdate(checkPropsChange)(Tags);