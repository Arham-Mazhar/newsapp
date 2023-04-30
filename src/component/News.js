import React, { Component } from "react";
import Newsitem from "./Newsitem";


export class News extends Component {
  articles = [
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Mike Bedigan",
      title: "Jerry Allison death: The Crickets drummer dies aged 82",
      description:
        "The death of the percussionist was announced on Monday 22 August",
      url: "http://www.independent.co.uk/arts-entertainment/music/news/jerry-allison-dead-the-crickets-b2150561.html",
      urlToImage:
        "https://static.independent.co.uk/2022/08/23/07/newFile-3.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2022-08-23T06:19:47Z",
      content:
        "Musician Jerry Allison, who played alongside Buddy Holly in American rock band The Crickets, has died aged 82.\r\nThe drummer, who is credited with co-writing hits including Thatll Be the Day and Peggy… [+1549 chars]",
    },
    {
      source: {
        id: "abc-news-au",
        name: "ABC News (AU)",
      },
      author: "Elizabeth Byrne",
      title:
        "Another victim of former elite junior cricket coach Ian Harold King tells court of lasting impact of his abuse",
      description:
        "Ian Harold King, a former Queensland state cricketer, is currently serving a 22-year sentence for offences against 10 other boys.",
      url: "http://www.abc.net.au/news/2022-08-23/act-coach-ian-harold-king-convicted-sexual-offence-victim-impact/101357908",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/4c4989dbeb04702b6957ca9aa2902ded?impolicy=wcms_crop_resize&cropH=552&cropW=981&xPos=0&yPos=0&width=862&height=485",
      publishedAt: "2022-08-22T20:42:49Z",
      content:
        'A Canberra man abused by notorious paedophile Ian Harold King has told the ACT Supreme Court the former elite junior cricket coach "stole" his soul.\r\nKey points:\r\n<ul><li>Ian Harold King is serving a… [+2494 chars]',
    },
    {
      source: {
        id: "news-week",
        name: "News week",
      },
      author: "News Week",
      title: "The World Cup is Exciting, Lucrative, and Deadly | Opinion",
      description: "Watch herethe updates of fifa World cup 2022.",
      url: "http://www.newsweek.com/world-cup-exciting-lucrative-deadly-opinion-1735799",
      urlToImage:
        "https://d.newsweek.com/en/full/2101945/qatar-2022-fifa-world-cup-countdown-clock.webp?w=790&f=01b4eaa33e876efe20b0360c8c154280",
      publishedAt: "2022-03-30T08:22:26.498888Z",
      content: "FIFA World cup 2022",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  // async componentDidMount()   {
  //   let url;
  //   url =
  //     "https://newsapi.org/v2/everything?q=tesla&from=2022-07-25&sortBy=publishedAt&apiKey=67299cece87c43ac958bf6c1ee2f59ddcd";
  //   let data =await fetch(url);
  //   let pasdata = await data.json;
  //   console.log(pasdata);
  //   this.setState({ articles: pasdata.articles });
  // }
  // componentDidMount() {
  //   axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-07-25&sortBy=publishedAt&apiKey=67299cece87c43ac958bf6c1ee2f59dd`)
  //     .then(res => {
  //       const persons = res.data;
  //       console.log(persons)
  //     })
  // }
  render() {
    // TO ADD NEW HERE
    return (
      <div className="container my-4">
        <h2 style={{ marginLeft: "-280px", marginBottom: "4%" }}>
          The News - Top Headlines
        </h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                {/* slice is used to mainatine the character length */}
                <Newsitem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 65)}
                  imageurl={element.urlToImage}
                  newurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
