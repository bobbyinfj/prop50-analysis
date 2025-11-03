// District data for Proposition 50 analysis
const districtData = [
    {
        id: 1,
        number: "CA-1",
        representative: "Doug LaMalfa",
        party: "Republican",
        region: "Northern California",
        currentLean: "Republican-leaning",
        projectedLean: "More competitive/Democratic-leaning",
        changes: [
            "Would lose Republican-leaning areas in the Sacramento Valley",
            "Would gain Democratic-leaning regions around Santa Rosa"
        ],
        impact: "high",
        voteShareChange: "+8.5% Democratic",
        competitiveness: "Significantly more competitive"
    },
    {
        id: 27,
        number: "CA-27",
        representative: "George Whitesides",
        party: "Democratic",
        region: "Northern L.A. County",
        currentLean: "Democratic-leaning",
        projectedLean: "More Democratic",
        changes: [
            "District boundaries would see alterations",
            "Could affect political landscape"
        ],
        impact: "medium",
        voteShareChange: "+3.2% Democratic",
        competitiveness: "Less competitive (safer Democratic)"
    },
    {
        id: 41,
        number: "CA-41",
        representative: "Ken Calvert",
        party: "Republican",
        region: "Riverside County",
        currentLean: "Republican stronghold",
        projectedLean: "Competitive/Democratic-leaning",
        changes: [
            "Would transform from Republican stronghold to competitive area",
            "Boundary adjustments to incorporate more Democratic-leaning areas"
        ],
        impact: "high",
        voteShareChange: "+12.1% Democratic",
        competitiveness: "Much more competitive"
    },
    {
        id: 45,
        number: "CA-45",
        representative: "Derek Tran",
        party: "Democratic",
        region: "L.A. and Orange Counties",
        currentLean: "Democratic-leaning",
        projectedLean: "More Democratic",
        changes: [
            "District modifications potentially enhancing Democratic advantages",
            "Boundary adjustments in L.A. and Orange Counties"
        ],
        impact: "medium",
        voteShareChange: "+5.8% Democratic",
        competitiveness: "Less competitive (safer Democratic)"
    },
    {
        id: 47,
        number: "CA-47",
        representative: "Dave Min",
        party: "Democratic",
        region: "Orange County",
        currentLean: "Democratic-leaning",
        projectedLean: "More Democratic",
        changes: [
            "District adjustments could solidify Democratic leanings",
            "Orange County boundary modifications"
        ],
        impact: "low",
        voteShareChange: "+2.5% Democratic",
        competitiveness: "Slightly less competitive"
    },
    {
        id: 48,
        number: "CA-48",
        representative: "Darrell Issa",
        party: "Republican",
        region: "San Diego",
        currentLean: "Republican-leaning",
        projectedLean: "More favorable to Democratic candidates",
        changes: [
            "Would shift from Republican-leaning areas in Temecula Valley",
            "Would gain Democratic-leaning cities in Coachella Valley and north San Diego County"
        ],
        impact: "high",
        voteShareChange: "+10.3% Democratic",
        competitiveness: "Much more competitive"
    },
    {
        id: 9,
        number: "CA-9",
        representative: "Josh Harder",
        party: "Democratic",
        region: "Central Valley",
        currentLean: "Swing district",
        projectedLean: "More Democratic",
        changes: [
            "Democratic advantage could increase by 13.1 percentage points",
            "Inclusion of more East Bay cities"
        ],
        impact: "high",
        voteShareChange: "+13.1% Democratic",
        competitiveness: "Much less competitive (safer Democratic)"
    },
    {
        id: 13,
        number: "CA-13",
        representative: "Adam Gray",
        party: "Democratic",
        region: "Central Valley",
        currentLean: "Swing district",
        projectedLean: "More Democratic",
        changes: [
            "Republican advantage may decrease by 5.5 percentage points",
            "Effectively eliminating Republican advantage",
            "Incorporation of strongly Democratic areas in Stockton"
        ],
        impact: "medium",
        voteShareChange: "+5.5% Democratic",
        competitiveness: "Less competitive (safer Democratic)"
    }
];

// Summary statistics
const summaryStats = {
    totalDistricts: 52,
    districtsChanged: 25,
    republicanDistrictsTargeted: 5,
    democraticAdvantageIncrease: "Average of +7.2%",
    latinoMajorityDistricts: 16,
    latinoInfluenceDistricts: {
        current: 6,
        projected: 8
    },
    fiscalImpact: {
        counties: "Up to a few million dollars",
        state: "$200,000"
    }
};

// Vote share data for charts
const voteShareData = {
    labels: ["CA-1", "CA-9", "CA-13", "CA-27", "CA-41", "CA-45", "CA-47", "CA-48"],
    current: [42, 52, 51, 55, 48, 53, 54, 46],
    projected: [50.5, 65.1, 56.5, 58.2, 60.1, 58.8, 56.5, 56.3],
    changes: [8.5, 13.1, 5.5, 3.2, 12.1, 5.8, 2.5, 10.3]
};

// Competitiveness data
const competitivenessData = {
    labels: ["Safe Democratic", "Likely Democratic", "Lean Democratic", "Toss-up", "Lean Republican", "Likely Republican", "Safe Republican"],
    current: [12, 8, 5, 8, 6, 7, 6],
    projected: [15, 10, 4, 5, 3, 3, 12]
};

// Party control data
const partyControlData = {
    current: {
        democratic: 42,
        republican: 10
    },
    projected: {
        democratic: 45,
        republican: 7
    }
};

