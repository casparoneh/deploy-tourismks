import React from "react";
import "../components/About.css";
import PersonListCard from "../components/PersonListCard";
import headerImage from "../prizeren.webp";
import {countryHeader} from "../data";
import {countryVip} from "../data";
import Title from "../components/Title";

const About = () => {
  return (
    <div style={{height: "100%"}}>
      <div className="image-header-container">
        <img src={headerImage} alt="prizeren" className="image-header" />
      </div>

      <div className="geography-of-kosovo">
        <Title title="GEOGRAPHY OF KOSOVO" />
        <p>
          The country is strategically positioned in the center of the Balkan Peninsula enclosed by Montenegro to the west, Serbia to the north and east, North Macedonia to the southeast, and Albania to the southwest. It has no direct access to the Mediterranean Sea but its rivers flow into three seas, the Adriatic, Aegean and Black Sea.
        </p>
        <p>The country is a quite rich country for its water sources, there are many long and short rivers, as well as artificial and natural lakes around the country. Most of the rivers that rise in Kosovo have their mouths outside the country's territory in the Adriatic, Aegean and Black Sea. The longest river is the Drini i Bardhë, while the shortest river is the Lumëbardhi i Prizrenit.</p>
        <p>The climate of the country is mostly defined by its geographical location in the southeastern part of the european continent and strongly influenced by the seas in the west, south and east. It enjoys a combination of a continental climate and a mediterranean climate, with four distinct seasons.</p>
        <p>The country of Kosovo features notable diversity with the landscape and relief. Framed along its borders by mountain ranges, as for instance the Albanian Alps, and the Sharr Mountains, the country's topography is clearly defined by two main plains, the plains of Dukagjini and Kosovo.</p>
        <p>Most of the country is mountainous and hilly. The southern and southeastern edge is distinguished by the Sharr Mountains.The Albanian Alps dominate the western edge as they offer the highest mountain of Kosovo, Gjeravica.Often referred to as the Bjeshkët e Nemuna, the region is considered to be among the most inaccessible mountain range in Europe and the wildest range on the Balkan Peninsula, which is best described in their name.</p>
        <p>A landlocked country, there are several notable rivers and lakes within the country's borders. The drainage basin of the Black Sea comprises 50.7 percent of the territory of the country and totals 5,520 square kilometres (2,130 sq mi), which makes it the largest in Kosovo. The main rivers in the section of the country of the river basin are the rivers of Ibar and Sitnica.</p>
        <p>In contrast, 43.5 percent of the country's territory is encompassed by the drainage basin of the Adriatic Sea.The area includes the largest rivers flowing in the country, the White Drin with its tributaries Erenik and Lumëbardhi i Decanit. The rest belongs to the Aegean Sea drainage basin, where the largest river by far is the Lepenac.</p>
        <p>The Nerodimka is of particular significance because it represents Europe's only instance of a river bifurcation flowing into two seas, the Black and Aegean Sea. The bifurcation of the river is considered to be an artificial phenomenon, but created under extremely favorable natural conditions.</p>
        <p>Kosovo is characterised by a diverse biodiversity and an abundance of different ecosystems and habitats with a remarkable exponential value.It is located at the crossroads of several biogeographical regions and therefore has specific climate, geological, hydrological and morphological conditions.</p>
        <p>Kosovo is particularly rich in remote and mountainous landscapes endowed with forests. They are home to a large number of the country's animal species, including many endangered species. Kosovo is one of the rare countries in Europe with populations of rare species, the golden eagle, the brown bear, the grey wolf and the lynx.</p>
        <p>Kosovo is located between the Mediterranean Sea and mountainous regions of Southeast Europe, on the Balkan Peninsula. This geographic location gives the country its large annual temperature range. Summer temperature highs can reach +30 °C (86 °F), winter's temperatures as low as −10 °C (14 °F).According to the Strahler classification map the climate in Kosovo is considered moist continental.The country experiences warm summers and cold and snowy winters.</p>

      </div>

      <div className="info-vip">
        <div className="short-info">
            <p className="heading-title">Short Info</p>
            <div>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Name</span>: Republic of Kosovo</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Capital</span>: Prishtina</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Area</span>: 10,877km2</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Population</span>: 1.800.000</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Currency</span>: Euro</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Relegion</span>: Muslim,Orthodox,Catholic</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Calling prefix</span>: +383</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Clime</span>: Continental</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Timezone</span>: UTC+1</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Demographic</span>: Albanian: 94.5%,other : 5.5%</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Official languages</span>: Albanian,Serbian</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Regional</span>: Bosnian,Turkish,Romani</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>Driving side</span>: Right</p>
                <p><span style={{fontWeight: "bold",fontFamily: "inherit",fontSize: 20}}>ISO CODE</span>: XK</p>
            </div>
        </div>
        <div className="vip-kosova">
           
                <PersonListCard  vipPerson={countryHeader} />
         
        </div>
      </div>
      <h4 className="person-might">Person you might know</h4>
      <div className="vip-person" style={{width: "90%",margin: "0px auto",height: "100%",marginBottom: "100px"}}>
          
          <PersonListCard vipPerson={countryVip} />
        
      </div>
    </div>
  );
};

export default About;
