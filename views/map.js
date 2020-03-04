var MAP_WIDTH = 620;
var MAP_HEIGHT = 600;

var mapContainer = document.getElementById("map");
var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);

// function clicked() {
//     ;
// }

var style = {
    fill: "#ddd", //fill color of regions
    stroke: "#aaa",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    cursor: "pointer"
};

var counties = {};

var regions = {};
regions["1"] = map.path("m 96.851794,65.177092 4.643806,-1.336347 1.30294,0.734992 1.46998,3.140416 -1.5368,1.536801 -6.381057,-1.269532 -0.534538,-1.469983 z");
regions["2"] = map.path("m 95.816125,66.513439 -3.608139,0.501132 -4.677216,-4.476766 -0.601356,-3.541321 -8.886714,0.668173 -1.336347,2.672697 -4.276312,0.868627 8.753078,9.955789 4.744032,-1.670436 1.33635,5.813113 4.476763,-0.467723 3.006783,-8.084902 1.603616,-0.7684 z");
regions["3"] = map.path("m 69.957798,62.070085 2.338607,9.755336 8.819896,8.352173 6.1472,-2.873147 -1.33635,-5.813113 -4.744032,1.670436 -8.753078,-9.955789 z");
regions["4"] = map.path("m 91.740264,76.836724 -0.935442,4.476766 -3.140417,2.204974 2.739512,17.105246 -9.287616,-2.405422 -2.806329,-5.278573 -13.764382,2.873148 -0.334087,-1.670436 1.469983,-3.674957 -2.204974,-2.204971 1.202714,-4.009044 4.009041,0.467723 1.069078,-2.33861 1.870887,0.400905 4.87767,2.204974 4.343128,-1.536801 0.267271,-3.274052 6.1472,-2.873147 z");
regions["5"] = map.path("m 89.134385,102.96232 4.34313,0.0668 3.073601,-4.009043 6.481284,0.668173 -5.144937,-10.824416 3.073597,-4.744035 -4.075857,-7.483546 1.269529,-1.737251 -2.338607,-1.80407 1.269529,-2.405425 -0.734991,-2.706105 -1.603616,0.7684 -3.006783,8.084902 -0.935442,4.476766 -3.140419,2.204974 2.739514,17.105246 z");
regions["6"] = map.path("m 106.37327,70.889978 5.07812,-2.405425 2.47224,1.536798 0.13364,3.87541 -6.08038,3.006781 1.00226,6.214017 1.73725,1.202714 0.13364,4.610399 -2.60588,0.267269 -3.20724,8.218538 -2.00452,2.27177 -5.144939,-10.824416 3.073599,-4.744035 -4.075859,-7.483546 1.269529,-1.737252 -2.338605,-1.804069 1.269526,-2.405425 -0.734988,-2.706105 6.381057,1.269553 z");
regions["7"] = map.path("m 102.79854,64.575737 1.30294,-1.503392 -0.93544,-1.202714 2.73951,-2.338607 5.14494,-0.200453 1.9377,-2.204974 1.9377,-1.202711 1.60362,0.267268 0.13364,2.004521 0.73499,1.002263 -0.53454,1.403164 2.20497,1.336347 0.40091,2.739512 3.40768,2.472245 -0.4009,3.140417 -1.26953,-1.135896 -1.67043,0.935442 1.13589,4.677217 -2.47224,1.804069 -3.0736,-1.269529 -1.06908,-1.403167 -0.13364,-3.875408 -2.47224,-1.536798 -5.07812,2.405425 -3.64155,-1.637024 1.5368,-1.536801 z");
regions["8"] = map.path("m 98.021099,45.432556 8.151721,-0.400905 3.94222,5.211758 3.40769,-0.133636 2.80633,3.006783 0.20045,3.073598 -1.60362,-0.267268 -1.9377,1.202711 -1.9377,2.204974 -5.14494,0.200453 -2.73951,2.338607 0.93544,1.202714 -1.30294,1.503392 -1.30294,-0.734992 0.33409,-1.30294 -3.140417,-2.204971 2.806327,-1.469983 0.26727,-3.407688 0.93545,-1.135896 -2.00453,-1.202711 -0.935439,-2.539061 -1.737252,-0.334086 -1.069078,-0.935445 1.737252,-2.204974 z");
regions["9"] = map.path("m 89.602108,48.372521 5.078121,-2.873147 2.271792,3.80859 1.069078,0.935445 1.737252,0.334086 0.935439,2.539061 2.00453,1.202711 -0.93545,1.135896 -0.26727,3.407688 -2.806327,1.469983 3.140417,2.204971 -0.33409,1.30294 -4.643808,1.336347 v 0 0 l -1.169303,-1.503391 -3.407685,-8.418989 -2.873147,-3.674956 z");
regions["10"] = map.path("m 82.519466,47.169808 -1.202714,0.734991 -1.135896,-0.801809 -4.343127,6.347653 -2.004523,-0.267272 -0.668174,1.069078 4.877668,5.412208 8.886714,-0.668173 0.601356,3.541321 4.677214,4.476766 3.608141,-0.501132 1.035667,-1.336347 -1.169305,-1.503391 -3.407685,-8.418989 -2.873145,-3.674956 0.200451,-3.207235 -3.207234,-1.202713 z");
regions["11"] = map.path("m 67.799478,47.58296 -3.165551,0.566965 -1.181174,-3.874257 0.566965,-1.511903 -5.055434,-6.047621 -3.921503,3.685267 1.181177,2.834823 -4.299479,-1.086681 -5.38616,3.165549 -0.0945,5.433409 -1.700893,2.83482 4.677455,1.606399 3.307292,4.204986 -0.803198,1.748139 1.511905,0.803201 3.023809,-2.267857 1.133928,0.803198 -1.228423,2.409598 0.897694,0.755954 6.047618,-3.023809 1.902754,1.179674 4.744034,0.267271 2.472243,1.135896 4.276312,-0.868627 1.336347,-2.672697 -4.87767,-5.412208 z");
regions["12"] = map.path("m 64.822916,72.52939 1.937128,4.063243 0.944941,-0.472472 2.315104,0.472472 1.608143,6.19084 4.87767,2.204974 4.343128,-1.536801 0.267271,-3.274052 -8.819896,-8.352173 -2.338607,-9.755336 -4.74404,-0.267271 0.837581,0.946441 -0.661458,7.843006 -1.039434,0.992188 z");
regions["13"] = map.path("m 44.742925,53.583331 -3.307286,-0.850445 -6.236608,1.322917 -4.015996,2.882067 0.236235,1.559152 -5.527901,0.803201 2.882068,2.645833 5.575149,0.850445 0.425223,2.69308 -4.582962,6.189361 -1.842632,2.220611 3.401785,1.322916 2.409597,-1.27567 3.449034,2.929316 6.236608,-2.362351 5.480653,-0.09449 1.41741,1.27567 0.897694,-0.992188 2.882069,-0.188987 -0.944941,-1.181176 0.803199,-1.039434 3.779763,-0.614212 2.645833,2.834822 3.071056,-0.283482 0.944941,-1.700892 -0.472469,-0.944941 1.039434,-0.992188 0.661458,-7.843006 -0.837581,-0.946441 -1.902753,-1.179674 -6.047619,3.023809 -0.897694,-0.755954 1.228424,-2.409598 -1.133928,-0.803198 -3.023809,2.267857 -1.511906,-0.803201 0.803198,-1.748139 -3.307291,-4.204986 z");
regions["14"] = map.path("m 20.780205,88.396132 -1.870886,0.467722 -0.200452,7.082642 3.942225,0.935445 0.200452,1.603616 h 1.80407 l 2.405427,-1.469983 3.340867,3.674956 3.006783,0.13364 1.336347,-0.868631 -0.334087,-2.204974 3.274052,-1.469982 0.668174,-2.071339 -0.80181,-1.135896 -3.474503,-0.400904 -0.133635,-1.804069 1.202714,0.06682 1.804069,-2.806329 10.089425,0.133636 3.474503,-1.33635 -1.80407,-2.271789 0.267269,-1.670436 5.612662,-5.211755 2.472243,-0.668173 1.937702,1.870887 1.80407,3.875407 4.009043,-1.069078 0.200454,-3.474505 1.746731,-1.714074 -1.937128,-4.063238 -0.944941,1.700892 -3.071056,0.28348 -2.645833,-2.83482 -3.779763,0.614212 -0.803199,1.039434 0.944941,1.181174 -2.882069,0.188989 -0.897694,0.992188 -1.41741,-1.27567 -5.480653,0.09449 -6.236608,2.362353 -3.449034,-2.929318 -2.409597,1.27567 -3.401785,-1.322914 -1.554446,7.07985 -1.804068,-0.467722 0.334087,3.207234 -1.5368,4.476766 z");
regions["15"] = map.path("m 33.408691,100.82417 2.404552,4.21117 1.511906,0.23624 2.315104,-1.6064 3.496278,1.37016 4.819198,5.48065 2.078868,0.37798 1.700892,-1.93713 0.897694,-9.402155 -2.126114,-1.464657 0.94494,-1.464659 2.126115,-0.236233 2.787574,1.370163 0.897694,-0.944941 2.173364,0.992188 4.774747,-3.664119 1.469983,-3.674957 -2.204974,-2.204971 1.202714,-4.009044 4.009041,0.467723 1.069078,-2.33861 1.870887,0.400905 -1.608143,-6.19084 -2.315104,-0.472472 -0.944941,0.472474 -1.746731,1.714074 -0.200454,3.474506 -4.009043,1.069078 -1.80407,-3.875407 -1.937702,-1.870888 -2.472243,0.668174 -5.612662,5.211754 -0.267269,1.670436 1.80407,2.27179 -3.474503,1.336349 -10.089425,-0.133636 -1.804069,2.80633 -1.202714,-0.06682 0.133635,1.804069 3.474503,0.400902 0.80181,1.135896 -0.668174,2.071341 -3.274052,1.46998 0.334087,2.204974 z");
regions["16"] = map.path("m 50.034597,110.89397 2.787576,3.63802 0.188986,2.78758 -2.69308,3.35453 -2.409597,5.00819 0.566965,6.70908 -0.566965,1.18117 1.700892,0.18899 4.393973,-3.26004 0.661458,-4.25224 2.220611,-1.93712 2.598587,-5.29167 3.921503,-2.74033 0.661458,-0.99219 3.118303,-0.56696 3.118305,-2.45684 0.04725,-0.66146 -1.228423,-0.18899 -2.55134,-3.82701 0.472472,-2.83482 -0.803201,-0.56697 0.566965,-1.74814 -2.315104,-4.488464 0.0534,-2.135423 -0.334087,-1.670436 -4.774747,3.664119 -2.173364,-0.99219 -0.897694,0.944941 -2.787574,-1.370161 -2.126115,0.236233 -0.94494,1.464657 2.126114,1.464659 -0.897694,9.402155 z");
regions["17"] = map.path("m 91.753721,109.80729 -1.511906,0.8032 v 1.03943 l -2.409598,0.33073 -0.897694,-1.22842 -1.889882,0.47247 -1.889881,-1.08668 -1.370164,1.08668 -3.685267,0.8032 -2.456844,-0.51972 -2.787576,2.78758 -2.551337,-2.03162 0.04725,-0.66146 -1.228423,-0.18899 -2.55134,-3.82701 0.472471,-2.83482 -0.803201,-0.56697 0.566965,-1.74814 -2.315104,-4.488464 0.0534,-2.135423 13.764382,-2.87315 2.806329,5.278575 9.287616,2.405402 -1.269534,2.33863 4.34313,0.0668 -0.684358,2.24246 1.937128,3.07105 z");
regions["18"] = map.path("m 94.58854,146.37649 2.267858,0.28348 -0.377976,-1.51191 5.858628,-3.59077 1.7009,-3.2128 1.03943,-3.40178 3.2128,0.0945 3.59077,-2.55134 -1.41741,-1.79538 3.1183,-2.26786 3.96875,-0.47247 1.41742,3.1183 3.1183,-1.5119 0.37797,-3.49628 -4.81919,-4.53572 -2.17337,-8.31547 -6.52009,-4.63021 -4.6302,-6.04762 -0.94494,-0.47247 -0.34409,-2.370531 -6.481286,-0.668173 -3.073601,4.009044 -0.684358,2.24246 1.937128,3.07105 -2.976557,1.46462 3.732514,9.87463 0.472469,6.3311 -5.480653,0.47247 -0.04725,1.08668 -0.897695,0.18899 -0.283482,1.74814 0.519718,0.89769 -0.141742,3.2128 -2.645834,0.70871 0.983311,5.35001 -0.734991,1.83748 4.844259,0.56795 z");
regions["19"] = map.path("m 122.08631,129.55656 2.26084,5.87901 1.40316,0.26727 -1.87088,2.00452 3.14041,7.61718 2.53906,-6.48128 3.27405,2.60587 1.40317,0.40091 1.26953,2.67269 7.21628,-1.20271 0.73499,-1.80407 -1.06908,-0.80181 -0.26727,-5.81311 3.60814,-3.27405 4.94448,-1.73725 -1.5368,-3.94223 1.00226,-1.40317 3.27406,0.33409 4.07586,-8.95353 -0.66818,-4.40994 1.87089,-2.33861 -1.33635,-5.01131 -5.74629,-3.34086 -2.6727,0.8018 -4.74403,-1.00226 -5.34539,-5.412205 -1.73725,2.873147 -2.00453,-0.06682 -3.74177,-5.34539 -3.34087,-2.539061 -1.40316,0.935445 0.73499,2.138156 2.80633,2.204974 0.13363,1.670434 -5.87993,1.269529 -2.53906,3.207241 -2.80633,-0.40091 -2.73951,-2.672695 -3.00678,-1.135896 -3.20724,0.868627 -5.07812,-0.801809 -2.00452,2.271778 0.34409,2.370535 0.94494,0.47247 4.6302,6.04762 6.52009,4.63021 2.17337,8.31547 4.81919,4.53572 z");
regions["20"] = map.path("m 115.12635,75.299926 -1.5368,0.734992 2.73951,3.140416 -0.13363,1.737251 0.80181,1.135896 1.40316,-0.801809 4.81085,0.400905 0.20045,4.476765 2.6727,1.536798 -0.33409,2.33861 0.86863,1.069075 0.73499,2.138157 2.80633,2.204974 0.13363,1.670433 -5.87993,1.269529 -2.53906,3.207242 -2.80633,-0.40091 -2.73951,-2.672696 -3.00678,-1.135896 -3.20724,0.868627 -5.07812,-0.801809 3.20724,-8.218535 2.60588,-0.267269 -0.13364,-4.610399 -1.73725,-1.202716 -1.00226,-6.214015 6.08038,-3.006783 z");
regions["21"] = map.path("m 148.26777,65.611406 2.13816,-1.069078 5.94674,2.873147 2.40543,0.334087 2.80633,6.949006 4.20949,1.469983 3.34087,-1.469983 2.07134,1.603618 -2.40543,4.209495 1.60362,2.605878 -2.53906,1.069078 -4.54358,5.545844 h -2.60588 l -1.87089,5.144937 -2.53906,0.467722 -0.66817,5.81311 2.33861,1.67044 -0.60136,1.33634 -5.74629,-3.34086 -2.6727,0.8018 -4.74403,-1.00226 -5.34539,-5.412205 3.00678,-5.813113 -2.47224,-5.946746 0.86862,-1.937705 9.42125,-3.875408 z");
regions["22"] = map.path("m 161.96533,47.303443 1.06908,4.543581 -2.67269,5.011304 -3.74178,5.278572 -0.26727,5.278575 2.40543,0.334087 2.80633,6.949006 4.20949,1.469983 3.34087,-1.469983 0.53454,-2.739512 5.61266,-3.34087 -4.27631,0.133636 4.47676,-1.937705 -0.0668,-5.34539 1.40316,-1.536798 2.53906,4.075859 1.33635,-5.746295 15.50163,-3.541321 -4.54358,-5.612659 -3.0736,-8.485809 -2.27179,-0.06682 -6.21402,-2.271792 2.40543,-2.271791 -5.07812,-2.27179 -1.33635,-5.946748 -3.34087,-1.469982 1.26953,-2.605878 -3.14042,-1.536799 -5.14493,4.276312 -7.41673,1.269529 -7.21628,-0.46772 3.20723,5.612659 -0.46772,2.873148 -1.5368,5.479026 1.93771,5.211754 3.40768,2.939966 z");
regions["23"] = map.path("m 148.26777,65.611406 1.40316,12.027127 -9.42125,3.875408 -0.86862,1.937705 2.47224,5.946746 -3.00678,5.813113 -1.73725,2.873147 -2.00453,-0.06682 -3.74177,-5.34539 -3.34087,-2.53906 -1.40316,0.935444 -0.86863,-1.069075 0.33409,-2.338612 -2.6727,-1.536798 -0.20045,-4.476763 -4.81085,-0.400905 -1.40316,0.801809 -0.80181,-1.135898 0.13363,-1.737249 -2.73951,-3.140416 1.5368,-0.734992 3.0736,1.269529 2.47224,-1.804069 -1.13589,-4.677217 1.67043,-0.935442 1.26953,1.135896 5.27857,1.937702 8.15172,-0.334087 3.34087,-2.204974 2.13816,-3.073598 2.27179,-0.06682 z");
regions["24"] = map.path("m 135.97337,55.521981 1.26953,4.677217 4.07586,1.804069 2.33861,4.543579 4.6104,-0.93544 2.13816,-1.069078 5.94674,2.873147 0.26727,-5.278575 6.41447,-10.289876 -1.06908,-4.543581 -4.34312,2.071333 -3.40768,-2.939965 -1.93771,-5.211755 1.5368,-5.479026 -4.74404,2.338615 1.20271,3.140417 -1.06908,3.474503 0.46772,1.603618 -1.60361,2.873148 0.86862,2.338607 -0.53454,1.202713 -3.8754,0.06682 -3.14042,2.672694 0.26727,-1.804069 -3.0736,1.870887 z");
regions["25"] = map.path("m 125.08214,25.921881 8.35217,7.41673 3.34087,0.601355 4.94449,-1.069078 -0.66818,-1.804069 1.00226,-1.00226 0.93545,1.269529 8.08491,-4.075864 3.20723,5.612659 -0.46772,2.873147 -4.74404,2.338615 1.20271,3.140417 -1.06908,3.474503 0.46772,1.603618 -1.60361,2.873148 0.86862,2.338607 -0.53454,1.202713 -3.8754,0.06682 -3.14042,2.672694 0.26727,-1.804067 -3.0736,1.870885 h -2.60588 l -0.26727,-3.674957 -1.9377,-0.801809 -1.80407,-1.336347 -3.34087,-0.267269 0.33408,2.204974 -3.67495,0.133634 -1.06908,-1.069079 -0.86862,-10.557144 1.00226,-9.087165 -2.40543,-1.069078 -0.33409,-0.534538 z");
regions["26"] = map.path("m 116.32906,53.116556 6.1472,0.267269 2.80633,-1.603616 3.67495,-0.133636 -0.33408,-2.204974 3.34087,0.267269 1.80407,1.336347 1.9377,0.801809 0.26727,3.674957 1.26953,4.677217 4.07586,1.804069 2.33861,4.543579 -2.27179,0.06682 -2.13816,3.073598 -3.34087,2.204974 -8.15172,0.334087 -5.27857,-1.937702 0.4009,-3.140417 -3.40768,-2.472245 -0.40091,-2.739512 -2.20497,-1.336347 0.53454,-1.403164 -0.73499,-1.002263 -0.13364,-2.004521 z");
regions["27"] = map.path("m 125.08214,25.921881 0.93544,-1.937704 -1.46998,-1.937704 -4.07586,0.200452 -3.20724,-2.271791 -0.73499,2.004522 -2.40542,-0.133635 -0.33409,1.403165 0.80181,3.274052 -1.1359,2.806329 -2.07134,1.80407 0.46773,3.207234 h 0.66817 l -3.0736,2.939965 0.13363,1.469983 -1.46998,0.801807 0.40091,1.403167 -3.00678,2.672694 0.66817,1.403164 3.94222,5.211758 3.40769,-0.133636 2.80633,3.006783 6.1472,0.267269 2.80633,-1.603616 -1.06908,-1.069081 -0.86862,-10.557142 1.00226,-9.087164 -2.40543,-1.069078 -0.33409,-0.534538 z");
regions["28"] = map.path("m 82.519466,47.169808 1.469983,-4.476764 1.870887,0.868625 0.46772,-1.536798 -0.668174,-0.734991 -1.00226,-5.011304 2.071338,-1.469983 1.069078,1.069079 0.935445,-1.002261 0.133633,-1.403167 5.479026,1.002263 H 106.106 l 3.00678,-0.334087 2.73952,0.200451 h 0.66817 l -3.0736,2.939965 0.13363,1.469983 -1.46998,0.801807 0.40091,1.403167 -3.00678,2.672694 0.66817,1.403164 -8.151721,0.400905 0.668174,1.670434 -1.737252,2.204974 -2.271794,-3.80859 -5.078119,2.873147 -3.207234,-1.202713 z");
regions["29"] = map.path("m 79.178596,12.69204 4.009043,-4.8776692 -0.400904,-6.2140165 3.407688,3.140417 6.147196,-0.334087 13.497111,3.0067821 10.7576,0.7349911 -0.13364,10.4903285 -2.3386,3.207235 -0.33409,1.403165 0.80181,3.274052 -1.1359,2.806329 -2.07134,1.80407 0.46773,3.207234 -2.73952,-0.200451 -3.00678,0.334087 H 94.34614 l -5.479026,-1.002263 -0.734989,-2.138156 2.939965,-5.879929 -2.806329,-2.138156 -3.34087,-8.218538 -6.013564,-0.734991 z");
regions["30"] = map.path("m 58.964284,36.716144 -8.116257,-10.660628 1.804069,-3.474504 9.220798,0.06682 4.276315,-12.561667 3.808589,8.819894 5.078122,-5.545843 0.935442,1.5368 3.207234,-2.204973 -0.267269,1.670434 6.013564,0.734991 3.34087,8.218538 2.806327,2.138156 -2.939963,5.879929 0.734989,2.138156 -0.133633,1.403167 -0.935445,1.002261 -1.069078,-1.069079 -2.071336,1.469983 1.002258,5.011304 0.668176,0.734991 -0.46772,1.536798 -1.870887,-0.868625 -1.469983,4.476764 -1.202714,0.734991 -1.135898,-0.801809 -4.343125,6.347653 -2.004523,-0.267272 -0.668176,1.069078 -5.365552,-6.669489 -3.165551,0.566965 -1.181174,-3.874257 0.566965,-1.511903 z");
regions["31"] = map.path("m 28.597838,33.405429 8.352174,-2.472243 12.895754,-8.352174 h 2.80633 l -1.804069,3.474504 8.116257,10.660628 -3.921503,3.685267 1.181177,2.834823 -4.299479,-1.086681 -5.38616,3.165549 -0.0945,5.433409 -1.700892,2.83482 -3.307286,-0.850445 -6.236608,1.322917 z");
regions["32"] = map.path("m 6.9490076,28.260489 0.9354433,3.875408 -0.2672693,4.409948 -1.6036174,0.668173 1.0690781,1.202714 v 3.608139 l 1.8708867,1.804069 3.340869,10.557145 -1.469982,1.403165 -1.8040697,4.075861 1.0022607,9.020347 1.336348,3.140416 -3.8754084,8.485807 1.403165,3.140416 4.7440344,2.672696 4.744034,0.267269 2.405425,1.80407 3.006783,-0.200446 1.5368,-4.476766 -0.334087,-3.207234 1.804068,0.46772 1.554446,-7.079853 6.425594,-8.409972 -0.425223,-2.69308 -5.575149,-0.850445 -2.882068,-2.645833 5.527901,-0.803201 -0.236235,-1.559152 4.015999,-2.882067 -6.601196,-20.650374 -9.15398,-2.33861 0.200452,1.536801 -2.138156,1.870887 -6.614921,-4.142679 -1.26953,-2.338607 z");



var animationSpeed = 500;
var hoverStyle = {
  fill: "#A8BED5"
}

for(var regionName in regions) {
    (function (region) {
        region.attr(style);

        region[0].addEventListener("mouseover", function() {
            region.animate(hoverStyle, animationSpeed);
        }, true);

        region[0].addEventListener("mouseout", function() {
          region.animate(style, animationSpeed);
        }, true);

    })(regions[regionName]);
}