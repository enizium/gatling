var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1247",
        "ok": "1247",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "647",
        "ok": "647",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "218",
        "ok": "218",
        "ko": "-"
    },
    "percentiles1": {
        "total": "683",
        "ok": "683",
        "ko": "-"
    },
    "percentiles2": {
        "total": "826",
        "ok": "826",
        "ko": "-"
    },
    "percentiles3": {
        "total": "943",
        "ok": "943",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1173",
        "ok": "1173",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 342,
    "percentage": 68
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 156,
    "percentage": 31
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "250",
        "ko": "-"
    }
},
contents: {
"req_get-employee-co-c19c9": {
        type: "REQUEST",
        name: "get employee contact request",
path: "get employee contact request",
pathFormatted: "req_get-employee-co-c19c9",
stats: {
    "name": "get employee contact request",
    "numberOfRequests": {
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1247",
        "ok": "1247",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "647",
        "ok": "647",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "218",
        "ok": "218",
        "ko": "-"
    },
    "percentiles1": {
        "total": "683",
        "ok": "683",
        "ko": "-"
    },
    "percentiles2": {
        "total": "826",
        "ok": "826",
        "ko": "-"
    },
    "percentiles3": {
        "total": "943",
        "ok": "943",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1173",
        "ok": "1173",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 342,
    "percentage": 68
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 156,
    "percentage": 31
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "250",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
