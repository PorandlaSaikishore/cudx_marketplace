import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faFolderTree } from '@fortawesome/free-solid-svg-icons'

function BrowseData() {
    const [selected, setSelected] = useState(0);
    const creditUnionCategories = [
  "Total Assets",
  "Total Liabilities",
  "Net Worth / Capital",
  "Total Members",
  "Member Growth Rate",
  "Total Loans",
  "Loan Portfolio Breakdown",
  "Loan Delinquency Rate",
  "Loan Charge-Offs",
  "Total Shares / Deposits",
  "Savings Accounts",
  "Checking Accounts",
  "Certificates / Time Deposits",
  "Interest Income",
  "Non-Interest Income (fees, interchange)",
  "Operating Expenses",
  "Net Income / Profit",
  "Return on Assets (ROA)",
  "Return on Equity (ROE)",
  "Capital Adequacy Ratio",
  "Liquidity / Cash Reserves",
  "Asset Quality Ratio",
  "Efficiency Ratio (cost-to-income)",
  "Members per Employee",
  "Loans per Employee",
  "Branch Count / Locations",
  "Digital / Mobile Usage",
  "Member Age Demographics",
  "Member Income Demographics",
  "Product Usage / Engagement Metrics"
];

const creditUnionTrendingSearches = [
  "Credit union near me",
  "Best credit unions",
  "Credit union vs bank comparison",
  "Credit union loans",
  "Low interest credit union loans",
  "Credit union credit cards",
  "Credit union atm near me",
  "Federal credit union near me",
  "Community credit union",
  "Secured loans credit union",
  "Best credit union rates",
  "Credit card credit union offers",
  "Credit union mortgage rates",
  "Credit union checking account",
  "Free checking credit union",
  "Credit union savings account",
  "Credit union membership eligibility",
  "Local credit union branches",
  "Credit union service centre near me",
  "Credit collection services",
  "Credit score definition",
  "Nearest credit union",
  "Union bank credit card",
  "Credit union auto loans",
  "Credit union home equity loans",
  "Compare credit union accounts",
  "Credit union online banking",
  "Credit union fees explained",
  "Credit union vs bank fees",
  "How to join a credit union"
];

const creditUnionUseCases = [
  "Member account management",
  "Opening savings accounts",
  "Opening checking accounts",
  "Loan applications (personal loans)",
  "Auto loan processing",
  "Mortgage applications",
  "Home equity loans",
  "Credit card issuance",
  "Member onboarding & KYC verification",
  "Transaction monitoring and reporting",
  "Bill payment services",
  "Mobile banking services",
  "Online banking login & security",
  "ATM & branch locator services",
  "Member notifications and alerts",
  "Fraud detection and prevention",
  "Loan approval workflows",
  "Interest rate management",
  "Financial advisory services",
  "Member loyalty programs",
  "Member demographic analysis",
  "Product cross-selling and recommendations",
  "Regulatory compliance reporting",
  "Risk assessment and credit scoring",
  "Digital wallet & payments",
  "Loan delinquency management",
  "Customer support & ticketing",
  "Branch operations management",
  "Marketing & campaign management",
  "Reporting & business intelligence dashboards"
];
    function setBrowse(count) {
        setSelected(count)
    }
    return (<>
        <div className="bg-white pt-7">
            <div className="text-3xl font-semibold text-center bg-white">Browse <span className="text-blue-900">Data</span> By</div>
            <div class="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent px-[50%]"></div>
            <div className="flex items-center justify-center gap-[20%] mt-[2%]">
                <div className={selected === 0 ? "border border-blue-900 rounded-full px-[2%] py-[1%] text-blue-900 cursor-pointer font-semibold" : "border border-gray-400 rounded-full px-[2%] py-[1%] text-gray-400 cursor-pointer"} onClick={() => setBrowse(0)}>Category<FontAwesomeIcon icon={faList} className='pl-2' /></div>
                <div className={selected === 1 ? "border border-blue-900 rounded-full px-[2%] py-[1%] text-blue-900 cursor-pointer font-semibold" : "border border-gray-400 rounded-full px-[2%] py-[1%] text-gray-400 cursor-pointer"} onClick={() => setBrowse(1)}>Trending Search<FontAwesomeIcon icon={faArrowTrendUp} className='pl-2' /></div>
                <div className={selected === 2 ? "border border-blue-900 rounded-full px-[2%] py-[1%] text-blue-900 cursor-pointer font-semibold" : "border border-gray-400 rounded-full px-[2%] py-[1%] text-gray-400 cursor-pointer"} onClick={() => setBrowse(2)}>Use Case
                    <FontAwesomeIcon icon={faFolderTree} className='pl-2' />
                </div>
            </div>
            <div className="flex items-center justify-center gap-[20%] mt-[2%]">
                {selected === 0 ? <div className="border border-blue-900 rounded-2xl p-7 w-[80%] mx-auto"><div className="flex items-center justify-center gap-7">
                    <div className=" mx-auto flex flex-wrap gap-6 items-center justify-center cursor-pointer">
  {creditUnionCategories.map((category, index) => (
    <div
      key={index}
      className="relative group text-gray-800 transition-colors duration-300 hover:text-blue-900"
    >
      {category}
      <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
    </div>
  ))}
</div>

                </div></div> : <></>}
                {selected === 1 ? <div className="border border-blue-900 rounded-2xl p-7 w-[80%] mx-auto"><div className="flex items-center justify-center gap-7">
                    <div className=" mx-auto flex flex-wrap gap-6 items-center justify-center cursor-pointer">
  {creditUnionTrendingSearches.map((trending, index) => (
    <div
      key={index}
      className="relative group text-gray-800 transition-colors duration-300 hover:text-blue-900"
    >
      {trending}
      <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
    </div>
  ))}
</div>

                </div></div> : <></>}
                {selected === 2 ? <div className="border border-blue-900 rounded-2xl p-7 w-[80%] mx-auto"><div className="flex items-center justify-center gap-7">
                    <div className=" mx-auto flex flex-wrap gap-6 items-center justify-center cursor-pointer">
  {creditUnionUseCases.map((usecase, index) => (
    <div
      key={index}
      className="relative group text-gray-800 transition-colors duration-300 hover:text-blue-900"
    >
      {usecase}
      <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
    </div>
  ))}
</div>

                </div></div> : <></>}
            </div>
        </div>
    </>)
}

export default BrowseData;