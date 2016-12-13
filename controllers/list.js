(function () {
    angular
        .module("formulaFacts")
        .controller("listCtrl", ListController);
    
        ListController.$inject = ['quizMetrics'];
    
        function ListController(quizMetrics){
            var vm = this;
            
            vm.quizMetrics = quizMetrics;
            vm.data = formulaData;
            vm.activeFormula = {};
            vm.changeActiveFormula = changeActiveFormula;
            vm.activateQuiz = activateQuiz;
            vm.search = "";
            
            function changeActiveFormula (index){
                vm.activeFormula = index;
            }
            
            function activateQuiz() {
                quizMetrics.changeState(true);
            }
        }
    
    var formulaData = [
        {
            type: "MERCEDES AMG",
            image_url: "https://www.mercedesamgf1.com/wp-content/uploads/sites/3/2016/10/03.jpg",
            locations: "	Brackley, Northamptonshire, United Kingdom",
            size: "XXXX people",
            lifespan: "XX years",
            team: "Toto Wolff (Head of Motorsport)",
            description: "Mercedes AMG Petronas Formula One Team, a Formula One racing team, based in Brackley, United Kingdom, using a German licence. Mercedes-Benz had competed in the pre-war European Championship winning three titles, and debuted in Formula One in 1954, running a team for two years. After winning their first race at the 1954 French Grand Prix, driver Juan Manuel Fangio won another three Grands Prix to win the 1954 Drivers' Championship, and repeated this success in 1955 when he won the second title for Mercedes-Benz. Despite winning two championships, Mercedes-Benz withdrew from motor racing in response to the 1955 Le Mans disaster, and did not return to Formula One until rejoining as an engine supplier in association with Ilmor in 1994. Mercedes-Benz returned as an engine supplier in 1994 in a partnership with Ilmor, a British independent high-performance autosport engineering company with manufacturing based in Brixworth, Northamptonshire, now called Mercedes AMG High Performance Powertrains."
            
        },
        {
            type: "SCUDERIA FERRARI",
            image_url: "https://pbs.twimg.com/media/CqzKgqHXgAAApy3.jpg",
            locations: "Maranello, Italy",
            team: "Maurizio Arrivabene(Managing Director & Team Principal)",
            size: "XXXX people",
            lifespan: "XX years",
            description: "Scuderia Ferrari is the official name of the racing division of luxury Italian auto manufacturer, Ferrari, and competes in Formula One racing. It is the oldest surviving and most successful Formula One team, having competed in every world championship since the 1950 Formula One season. The team was founded by Enzo Ferrari, initially to race cars produced by Alfa Romeo, though by 1947 Ferrari had begun building its own cars. Among its important achievements outside Formula One are winning the World Sportscar Championship, 24 Hours of Le Mans, 24 Hours of Daytona, 12 Hours of Sebring, races for Grand tourer cars and racing on road courses of the Targa Florio, the Mille Miglia and the Carrera Panamericana. As a constructor, Ferrari has a record 16 Constructors' Championships, the last of which was won in 2008. Alberto Ascari, Juan Manuel Fangio, Mike Hawthorn, Phil Hill, John Surtees, Niki Lauda, Jody Scheckter, Michael Schumacher and Kimi Räikkönen have won a record 15 Drivers' Championships for the team."
        },
        {
            type: "Williams Martini Racing",
            image_url: "http://az732437.vo.msecnd.net/-/media/images/gallery/large/wr3i1558.ashx?h=912&thn=0&w=1368&hash=053206E04BCE95AED32192447CB6B33180050D43",
            locations: "Grove, Wantage, Oxfordshire, United Kingdom",
            team: "Sir Frank Williams Claire Williams OBE (Deputy)",
            size: "XXXX people",
            lifespan: "XX years",
            description: "Williams Grand Prix Engineering Limited, currently racing in Formula One as Williams Martini Racing, is a British Formula One motor racing team and constructor. It was founded and is run by team owner Sir Frank Williams and automotive engineer Sir Patrick Head. The team was formed in 1977 after Frank Williams' two earlier unsuccessful F1 operations: Frank Williams Racing Cars (1969 to 1975) and Wolf-Williams Racing (1976). All of Williams F1 chassis are called 'FW' then a number, the FW being the initials of team owner, Frank Williams. Williams's first race was the 1977 Spanish Grand Prix, where the new team ran a March chassis for Patrick Nève. Williams started manufacturing its own cars the following year, and Switzerland's Clay Regazzoni won Williams's first race at the 1979 British Grand Prix. At the 1997 British Grand Prix, Canadian Jacques Villeneuve scored the team's 100th race victory, making Williams one of only three teams in Formula One, alongside Ferrari and fellow British team McLaren, to win 100 races. Williams won nine Constructors' Championships between 1980 and 1997. This stood as a record until Ferrari surpassed it in 2000."   
        },
        {
            type: "Red Bull Racing",
            image_url: "http://image2.redbull.com/rbx00498/0010/1/590/332/445/gallery/images/13_usgp_fpgallery_421412312312.jpg",
            locations: "Milton Keynes, Buckinghamshire, United Kingdom",
            team: "Helmut Marko (Advisor to Red Bull GmbH)",
            size: "XXXX people",
            lifespan: "XX years",
            description: "Red Bull Racing is an Austrian Formula One racing team based in Milton Keynes, England. It is one of two F1 teams owned by beverage company Red Bull GmbH, the other being Scuderia Toro Rosso. The team won four successive Constructors' Championship titles, in 2010, 2011, 2012, and 2013, becoming the first Austrian licensed team to win the title. The team also produced the quadruple world champion driver of 2010, 2011, 2012, and 2013, Sebastian Vettel. The team is managed by Christian Horner. The team has used Renault engines since 2007, and has a contract to do so until 2016. After two seasons of poor results Red Bull Racing announced the team will use TAG Heuer-branded Renault engines starting from the 2016 season." 
        },
        {
            type: "SAHARA FORCE INDIA F1 TEAM",
            image_url: "https://scontent-fra3-1.xx.fbcdn.net/t31.0-8/13640995_10154179351412936_1507962624853524538_o.jpg",
            locations: "Silverstone, Northamptonshire, United Kingdom",
            team: "Subrata Roy(Chairman)",
            size: "XXXX people",
            lifespan: "XX years",
            description: "The Sahara Force India F1 Team is a Formula One racing team based in Silverstone, United Kingdom with an Indian licence. The team was formed in October 2007 when a consortium led by Indian businessman Vijay Mallya and Dutch businessman Michiel Mol bought the Spyker F1 team for €90 million. After going through 29 races without scoring points, Force India won their first Formula One world championship points and podium place when Giancarlo Fisichella finished second in the 2009 Belgian Grand Prix. Force India scored points again in the following race when Adrian Sutil finished fourth, and set the team's first fastest lap, at the Italian Grand Prix. The team's other podium finishes to date are four third-places, in the 2014 Bahrain Grand Prix, 2015 Russian Grand Prix, 2016 Monaco Grand Prix and the 2016 European Grand Prix, all achieved by Sergio Pérez. In October 2011, Indian company Sahara India Pariwar, purchased 42.5% of Force India F1's shares at US$100 million."  
        },
        {
            type: "RENAULT SPORT FORMULA 1 TEAM",
            image_url: "https://pbs.twimg.com/media/CvZcxgTXYAELnE6.jpg",
            locations: "Enstone, United Kingdom; Viry-Châtillon, France",
            team: "Jérôme Stoll(President)",
            size: "XXXX people",
            lifespan: "XX years",
            description: "Renault are currently involved in Formula One as a constructor, under the name of Renault Sport Formula One Team. They have been associated with Formula One as both constructor and engine supplier for various periods since 1977. In 1977, the company entered Formula One as a constructor, introducing the turbo engine to Formula One in its first car, the Renault RS01. In 1983, Renault began supplying engines to other teams. Although the Renault team won races and competed for world titles, it withdrew at the end of 1985. Renault continued supplying engines to other teams until 1986, then again from 1989 to 1997."
        }
    ]
})();