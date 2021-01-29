/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 44.03732378569826, "KoPercent": 55.96267621430174};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.04526173369013143, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.015621168277012114, 500, 1500, "Update Track"], "isController": false}, {"data": [0.04574926820056026, 500, 1500, "Read All Genres"], "isController": false}, {"data": [0.014956162970603403, 500, 1500, "Delete Playlist"], "isController": false}, {"data": [0.04995020070624453, 500, 1500, "Read All Artist"], "isController": false}, {"data": [0.07922392886014551, 500, 1500, "Create Tracks"], "isController": false}, {"data": [0.08346905537459283, 500, 1500, "Create Playlist"], "isController": false}, {"data": [0.08453325750329602, 500, 1500, "Create Genre"], "isController": false}, {"data": [0.03724372194589348, 500, 1500, "Read One Track"], "isController": false}, {"data": [0.013241710296684119, 500, 1500, "Update Artist"], "isController": false}, {"data": [0.013316092736264235, 500, 1500, "Update Genre"], "isController": false}, {"data": [0.08185846184311493, 500, 1500, "Create Artist"], "isController": false}, {"data": [0.015348860966390846, 500, 1500, "Delete Album"], "isController": false}, {"data": [0.013185828183233477, 500, 1500, "Update Playlist"], "isController": false}, {"data": [0.016482208734975603, 500, 1500, "Delete Track"], "isController": false}, {"data": [0.03506999026873269, 500, 1500, "Read One Genre"], "isController": false}, {"data": [0.0360350611405692, 500, 1500, "Read One Artist"], "isController": false}, {"data": [0.07315469855380956, 500, 1500, "Create Track"], "isController": false}, {"data": [0.045191233947515355, 500, 1500, "Read One Album"], "isController": false}, {"data": [0.03620709760174136, 500, 1500, "Read One Playlist"], "isController": false}, {"data": [0.049075919856742235, 500, 1500, "Read All Tracks"], "isController": false}, {"data": [0.049333725259651184, 500, 1500, "Read All Playlists"], "isController": false}, {"data": [0.05969528317585933, 500, 1500, "Create Album"], "isController": false}, {"data": [0.0595707656612529, 500, 1500, "Read All Album"], "isController": false}, {"data": [0.016922482332155476, 500, 1500, "Delete Genre"], "isController": false}, {"data": [0.019215436134587784, 500, 1500, "Delete Artist"], "isController": false}, {"data": [0.010836693548387098, 500, 1500, "Update Album"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 699929, 391699, 55.96267621430174, 4123.082599806472, 1, 451284, 5406.0, 27776.0, 28152.95, 45255.97, 685.3354665747571, 2101.7951647768664, 72.51902308645943], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Update Track", 20389, 15516, 76.0998577664427, 4510.774976703132, 2, 451258, 2149.5, 10361.900000000001, 13670.95, 24296.920000000013, 21.90502486594735, 51.68778427602168, 2.2689087913532684], "isController": false}, {"data": ["Read All Genres", 31771, 11693, 36.80400365112839, 4385.314500645248, 3, 451284, 1784.0, 10044.400000000009, 13344.95, 25277.99000000016, 32.58373613029802, 196.69932797839, 3.7000561249239787], "isController": false}, {"data": ["Delete Playlist", 17451, 13366, 76.59159933528164, 4176.990430347822, 2, 46789, 1993.0, 9910.0, 13190.999999999978, 24339.92, 37.710121940414936, 85.69539947681555, 3.0925558920579905], "isController": false}, {"data": ["Read All Artist", 33133, 13065, 39.43198623728609, 4314.192647813362, 3, 416797, 1762.0, 10187.500000000007, 13623.0, 28036.94000000001, 35.17161728083156, 194.8346816456714, 3.848641356558865], "isController": false}, {"data": ["Create Tracks", 3711, 1846, 49.74400431150633, 3771.7105901374352, 2, 447713, 986.0, 11531.600000000002, 14319.599999999997, 23432.640000000003, 5.632515902636856, 8.439486288102202, 0.6770007047285207], "isController": false}, {"data": ["Create Playlist", 36840, 18893, 51.283930510314875, 3746.9237513572048, 1, 451273, 1439.0, 10704.700000000004, 14300.0, 24322.94000000001, 37.64980975808669, 56.05508032425694, 5.283642946447642], "isController": false}, {"data": ["Create Genre", 38683, 21285, 55.024170824393146, 3671.033373833492, 2, 447747, 1288.0, 10941.700000000004, 14546.95, 24160.900000000016, 39.29078921841973, 60.42456501814062, 4.611339648967377], "isController": false}, {"data": ["Read One Track", 24729, 12175, 49.233693234663754, 4150.058271664853, 3, 451254, 1739.0, 9496.0, 12907.95, 24319.980000000003, 25.862609917922374, 50.07527953540853, 2.3515149632439067], "isController": false}, {"data": ["Update Artist", 22920, 17449, 76.13001745200698, 4263.423036649238, 2, 451270, 1872.0, 9799.30000000001, 13204.0, 24324.960000000006, 24.184894148880606, 59.932201574550575, 2.8506576768441247], "isController": false}, {"data": ["Update Genre", 22041, 16485, 74.79243228528651, 4329.9116646250395, 2, 48979, 1973.0, 9693.700000000004, 13144.95, 24355.700000000048, 44.26419141185118, 105.65357127122736, 5.7620309726082555], "isController": false}, {"data": ["Create Artist", 40399, 24606, 60.90744820416347, 3692.28144260995, 2, 451282, 1067.0, 12624.0, 16210.750000000004, 29699.200000000128, 41.23015877065769, 67.46383648756533, 3.753879535684871], "isController": false}, {"data": ["Delete Album", 19578, 15616, 79.76299928491163, 4242.930534273173, 2, 45426, 2088.0, 9874.200000000004, 12902.099999999999, 24273.0, 22.011083116629063, 54.70602640602005, 1.8610924375829856], "isController": false}, {"data": ["Update Playlist", 21197, 15979, 75.38330895881492, 4441.9870264660285, 2, 451257, 2068.5, 10286.900000000001, 13397.800000000003, 24269.970000000005, 22.621281100659736, 53.32996538194022, 3.09619976557781], "isController": false}, {"data": ["Delete Track", 16806, 12561, 74.7411638700464, 4219.303463048911, 1, 443893, 1972.5, 10095.600000000002, 13010.65, 24285.950000000004, 18.793801601599586, 40.85451306241061, 1.5237898453391796], "isController": false}, {"data": ["Read One Genre", 26718, 12176, 45.57227337375552, 4369.624185942053, 2, 451271, 1826.5, 9932.30000000001, 13523.0, 25165.980000000003, 27.592431754739447, 54.27797889800674, 2.669800039295308], "isController": false}, {"data": ["Read One Artist", 27723, 11819, 42.632471233272014, 4528.304728925443, 2, 451284, 1921.5, 10203.30000000001, 13606.550000000007, 25752.840000000026, 28.689966635482296, 57.59300527478123, 2.9224615341727587], "isController": false}, {"data": ["Create Track", 31946, 15287, 47.85262630689288, 3968.4104426218964, 2, 447769, 1664.0, 9879.900000000001, 13000.550000000007, 25255.87000000002, 32.66906440241873, 49.29168277581461, 3.975670267850843], "isController": false}, {"data": ["Read One Album", 28656, 10862, 37.90480178671133, 4328.6320840312665, 3, 48866, 1892.0, 10075.000000000015, 13617.95, 25331.94000000017, 54.80112218378341, 111.76256550793255, 6.015820271787252], "isController": false}, {"data": ["Read One Playlist", 25727, 12334, 47.941850973685234, 4281.546235472443, 2, 447404, 1776.0, 9339.0, 13126.500000000007, 25415.970000000005, 26.929566731983453, 52.242811432648864, 2.5245640820871853], "isController": false}, {"data": ["Read All Tracks", 29597, 10558, 35.67253437848431, 4423.541304861975, 2, 451263, 1886.0, 10219.900000000001, 13548.900000000001, 25303.600000000064, 30.483804352416136, 269.27306632721246, 3.5235746218234665], "isController": false}, {"data": ["Read All Playlists", 30618, 10945, 35.746946240773404, 4306.153994382385, 2, 451269, 1828.0, 9966.0, 13409.95, 24310.960000000006, 31.45902559012644, 207.4453167302798, 3.691311449991575], "isController": false}, {"data": ["Create Album", 54083, 35033, 64.77636225801083, 3491.8952166115137, 1, 451260, 2383.0, 15091.0, 27774.0, 34136.0, 52.9553683855971, 91.50174925143985, 4.361212420835725], "isController": false}, {"data": ["Read All Album", 34480, 14527, 42.13167053364269, 4207.924883990744, 4, 50219, 1745.5, 10945.700000000004, 14281.900000000001, 28089.0, 35.42208579377114, 240.01374140387753, 3.6832647980694553], "isController": false}, {"data": ["Delete Genre", 18112, 14115, 77.93175795053004, 4069.862246024731, 3, 52737, 1968.5, 9713.0, 12765.749999999993, 24181.139999999978, 39.21084706427401, 91.72918985488067, 3.1834978089759325], "isController": false}, {"data": ["Delete Artist", 18813, 15001, 79.73741561686069, 4075.4974751501595, 1, 44268, 1983.0, 9591.000000000011, 12673.0, 24229.76000000001, 20.576599791532455, 50.28937082463351, 1.6909982195220121], "isController": false}, {"data": ["Update Album", 23808, 18507, 77.734375, 4253.420068884411, 2, 451227, 1827.5, 9634.900000000001, 13227.0, 27450.99, 25.0070636972179, 64.55701460583519, 2.9307276064386256], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: An established connection was aborted by the software in your host machine", 8, 0.0020423845861235286, 0.0011429730729831168], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 4, 0.0010211922930617643, 5.714865364915584E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 147, 0.03752881677001984, 0.02100213021606477], "isController": false}, {"data": ["405", 40468, 10.33140242890587, 5.781729289685097], "isController": false}, {"data": ["Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 314262, 80.23048310054403, 44.899125482727534], "isController": false}, {"data": ["409", 6915, 1.765386176630525, 0.9879573499597817], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 29895, 7.63213590027036, 4.271147502103785], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 699929, 391699, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 314262, "405", 40468, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 29895, "409", 6915, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 147], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Update Track", 20389, 15516, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 10792, "405", 3440, "409", 670, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 604, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 10], "isController": false}, {"data": ["Read All Genres", 31771, 11693, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 11150, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 535, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 8, null, null, null, null], "isController": false}, {"data": ["Delete Playlist", 17451, 13366, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 10212, "405", 3018, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 136, null, null, null, null], "isController": false}, {"data": ["Read All Artist", 33133, 13065, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 11756, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 1299, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 10, null, null, null, null], "isController": false}, {"data": ["Create Tracks", 3711, 1846, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 1709, "409", 117, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 18, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 2, null, null], "isController": false}, {"data": ["Create Playlist", 36840, 18893, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 14917, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 3298, "409", 672, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 6, null, null], "isController": false}, {"data": ["Create Genre", 38683, 21285, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 16689, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 3949, "409", 629, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 11, "Non HTTP response code: java.net.SocketException/Non HTTP response message: An established connection was aborted by the software in your host machine", 7], "isController": false}, {"data": ["Read One Track", 24729, 12175, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 11771, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 392, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 11, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1, null, null], "isController": false}, {"data": ["Update Artist", 22920, 17449, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 11142, "405", 5309, "409", 745, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 246, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 7], "isController": false}, {"data": ["Update Genre", 22041, 16485, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 10846, "405", 4529, "409", 772, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 331, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 7], "isController": false}, {"data": ["Create Artist", 40399, 24606, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 19312, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 4811, "409", 481, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 2, null, null], "isController": false}, {"data": ["Delete Album", 19578, 15616, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 10879, "405", 4386, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 350, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 1, null, null], "isController": false}, {"data": ["Update Playlist", 21197, 15979, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 10729, "405", 3965, "409", 748, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 530, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 7], "isController": false}, {"data": ["Delete Track", 16806, 12561, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 9901, "405", 2550, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 108, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 2, null, null], "isController": false}, {"data": ["Read One Genre", 26718, 12176, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 11633, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 543, null, null, null, null, null, null], "isController": false}, {"data": ["Read One Artist", 27723, 11819, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 11189, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 628, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 2, null, null, null, null], "isController": false}, {"data": ["Create Track", 31946, 15287, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 11887, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 2767, "409", 616, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 14, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 3], "isController": false}, {"data": ["Read One Album", 28656, 10862, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 10565, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 296, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 1, null, null, null, null], "isController": false}, {"data": ["Read One Playlist", 25727, 12334, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 11743, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 580, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 11, null, null, null, null], "isController": false}, {"data": ["Read All Tracks", 29597, 10558, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 10317, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 239, "Non HTTP response code: java.net.SocketException/Non HTTP response message: An established connection was aborted by the software in your host machine", 1, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 1, null, null], "isController": false}, {"data": ["Read All Playlists", 30618, 10945, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 10694, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 248, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 3, null, null, null, null], "isController": false}, {"data": ["Create Album", 54083, 35033, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 29092, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 5196, "409", 742, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 3, null, null], "isController": false}, {"data": ["Read All Album", 34480, 14527, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 12382, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 2136, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 9, null, null, null, null], "isController": false}, {"data": ["Delete Genre", 18112, 14115, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 10573, "405", 3381, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 157, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 4, null, null], "isController": false}, {"data": ["Delete Artist", 18813, 15001, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 10844, "405", 3956, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 197, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 4, null, null], "isController": false}, {"data": ["Update Album", 23808, 18507, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 11538, "405", 5934, "409", 723, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8082 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 301, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer", 11], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
