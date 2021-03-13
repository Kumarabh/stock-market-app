import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-stock-message-board',
  templateUrl: './stock-message-board.component.html',
  styleUrls: ['./stock-message-board.component.css']
})
export class StockMessageBoardComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit() {
  }

  setCompareBrokerData() {
    this.service.setCompareBrokerData('zerodha',this.dataObject)
  }

  dataObject =  {
    information: "",
    
    about: {
    
    broker_name: "Zerodha",
    type_of_broker: "Discount Broker",
    supported_exchanges: "",
    account_type: "",
    year_of_incorporation: 10,
    number_of_branches: 10,
    broker_inquiry: ''
    },

    charges_and_amc: {
        trading_account_opening_charges: "",
        trading_account_amc_charges: "",
        demat_account_opening_charges: "",
        demat_account_amc_charges: "Rs 300"
    },
    brokerage: {
        account_type: "",
        fixed_charges: "-",
        equity_delivery_brokerage: "",
        equity_intraday_brokerage: "",
        equity_futures_brokerage: "",
        equity_options_brokerage: "",
    currency_futures_trading_brokerage: "",
    currency_options_trading_brokerage: "",
    commodity_futures_trading_brokerage: "",
    commodity_options_trading_brokerage: ""
    },
    brokerage_plan2: {
        account_type: "",
        fixed_charges: "-",
        equity_delivery_brokerage: "",
        equity_intraday_brokerage: "",
        equity_futures_brokerage: "0.03%",
        equity_options_brokerage: "Rs 75 per lot",
    currency_futures_trading_brokerage: "0.03%",
    currency_options_trading_brokerage: "Rs 10 per lot",
    commodity_futures_trading_brokerage: "0.30%",
    commodity_options_trading_brokerage: "Rs 75 per lot"
    },
    brokerage_plan3: {
        account_type: "My Plan",
        fixed_charges: "Annual brokerage of Rs 1000",
        equity_delivery_brokerage: "25% off on existing brokerage plan",
        equity_intraday_brokerage: "25% off on existing brokerage plan",
        equity_futures_brokerage: "25% off on existing brokerage plan",
        equity_options_brokerage: "25% off on existing brokerage plan",
    currency_futures_trading_brokerage: "25% off on existing brokerage plan",
    currency_options_trading_brokerage: "25% off on existing brokerage plan",
    commodity_futures_trading_brokerage: "25% off on existing brokerage plan",
    commodity_options_trading_brokerage: "25% off on existing brokerage plan"
    },
    brokerage2020: {
        account_type: "",
        fixed_charges: "-",
        equity_delivery: "Rs 0 (Free)",
        equity_intraday: "Rs 20 per executed order",
        equity_futures: "Rs 20 per executed order",
        equity_options: "Rs 20 per executed order",
    currency_futures: "Rs 20 per executed order",
    currency_options: "Rs 20 per executed order",
    commodity_futures: "Rs 20 per executed order",
    commodity_options: "Rs 20 per executed order"
    },
    minimum_brokerage_charges: "Rs 0",
    other_brokerage_charges: "-",
    call_and_trade_charges: "Rs 20 per executed order",
    
    transaction_charges: {
        equity_delivery: "NSE Rs 325 | BSE Rs 325",
        equity_intraday: "NSE Rs 325 | BSE Rs 325",
        equity_futures: "NSE Rs 300 | BSE Rs 150",
        equity_options: "NSE Rs 6000 | BSE Rs 3500",
        currency_futures: "NSE Rs 120 | BSE Rs 100",
        currency_options: "NSE Rs 4200 | BSE Rs 1000",
        commodity: "MCX Rs 250",
        enquire: "/review/zerodha"
    },
    leverage: {
        equity_delivery: "1x for fixed brokerage plan; Upto 4.5x for standard plan",
        equity_intraday: "Upto 16x",
        equity_futures: "6x",
        equity_options: "-",
        currency_futures: "6x",
        currency_options: "-",
        commodity_futures: "-",
        commodity_options: "-",
        enquire: "/review/zerodha"
    },
    features: {
        three_in_one_account: "no",
        charting: "yes",
        automated_trading: "no",
        sms_alerts: "yes",
        online_demo: "yes",
        online_portfolio: "no",
        margin_trading_funding_available: "yes",
        margin_against_shares_equity_cash: "-",
        margin_against_shares_equity_f_o: "-",
        trading_platforms: "OMNESYS NEST",
        intraday_square_off_time: "Eq Cash: 3:15 PM | Eq F&O : 3:25 PM | Currency: 4:45 PM | Commodities: 25 min before close",
        other_features: "Direct Mutual Funds, APIs for Algo Trading",
        referral_program: "yes",
        enquire: "/review/zerodha"


    },
    
    request_callback: {

    },
    investment_options: {
        stock_or_equity: "yes",
        commodity: "yes",
        currency: "yes",
        ipo: "yes",
        mutual_funds: "yes",
        bond_or_ncd: "yes",
        debt: "yes",
        other_investment_options: "Mutual Funds"

    },
    order_type_offered: {
        bracket_order: "-",
        cover_order: "-",
        buy_today_sell_tomorrow: "-",
        sell_today_buy_tomorrow: "-",
        after_market_order: "-",
        good_till_cancelled: "-",
        enquire: "/review/zerodha"

    },
    research_report: {
        daily_market_report: "no",
        free_tips: "no",
        quaterly_result_analysis: "no",
        news_alerts: "no",

    },
    investor_type: {
        casual_investor: "-",
        active_investor: "-",
        trader: "yes"
    },
    pros: [
        "Fixed and standard trading plans available for trading at NSE, BSE and MCX.",
        "Funds transfer facility with 45 major banks available.",
        "Master Trust gives Intraday up to 33 times exposure.",
        "No minimum brokerage.",
        "No need to login in different platforms for different segment.",
        "No more need to transfer deposits in one exchange to another for trading.",
        "Trade across all segments using Flexi-Balance feature wherein the balance across different segments viz. Equity, commodity, derivatives and currency can be used as one single balance."
    ],
    cons: [
        "Master Trust doesn't offer 3-in-1 account.",
        "Master Trust doesn't offer facility to invest in IPO, FPO, Mutual Funds, FDs, NCDs and Offer For Sale (OFS).",
        
    ],
    account_types: [
        {
            type: "Per Order Executed",
            description: "This trading plan offers trading at flat Rs 20 per trade irrespective to the size of the trade. The brokerage is charged as Rs 20 per executed order. It doesn't charge brokerage for equity delivery. Trading is available at BSE, NSE and MCX stock exchanges in equity, commodities and currency derivative segments."
        },
        {
            type: "Standard Brokerage",
            description: "This trading plan charges a percentage based brokerage. The brokerage depends on the size of the trade and investment segment as well. It charges 0.30% for equity delivery, 0.03% for equity intraday, equity futures, and currency futures. Equity and commodity options are charged at Rs 75 per lot. Whereas, currency options are charged at Rs 10 per lot."
        }
    ],
    trading_softwares: {
        description: "A client can trade with Master Trust in following ways:",
        softwares: [
            {
                type: "Master Swift 2.0- Installable Trading Platform",
                description: "It's an online trading platform offered by mastertrust. This application provides advance charting, pattern recognition and back testing features. It's a desktop trading software which offers a host of online trading tools and functions for share traders."
            },
            {
                type: "MasterMobile- Mobile Trading App",
                description: "MasterMobile is a mobile trading app offered by Mater Trust which allows user to trade and track equities and derivatives on-the-go. This app offers seamless movement across all the available trading sections."
            },
            {
                type: "MasterWeb- Website Trading Platform",
                description: "MasterWeb is mastertrust's online trading platform bundled with charting options, real-time quotes, portfolio tracking, news feed and research options."
            }
    
        ]
    },
    equity_charges: {
        brokerage: {
            equity_delivery: "",
            equity_intraday: "",
        },
        stt: {
            equity_delivery: "",
            equity_intraday: "",
            },
        transaction_charges: {
                equity_delivery: "",
                equity_intraday: "",
            },
        gst: {
                equity_delivery: "",
                equity_intraday: "",
            },
        sebi_charges: {
                equity_delivery: "",
                equity_intraday: "",
            },
        stamp_charges: {
                equity_delivery: "",
                equity_intraday: "",
            }
        
    },
    equity_f_and_o_charges: {
        brokerage: {
            futures: "",
            options: "",
        },
        stt: {
            futures: "",
            options: "",
            },
        transaction_charges: {
                futures: "",
                options: "",
            },
        gst: {
                futures: "",
                options: "",
            },
        sebi_charges: {
                futures: "",
                options: "",
            },
        stamp_charges: {
                futures: "",
                options: "",
            }
        
    }
    ,
    equity_currency_charges: {
        brokerage: {
            futures: "",
            options: "",
        },
        stt: {
            futures: "",
            options: "",
            },
        transaction_charges: {
                futures: "",
                options: "",
            },
        gst: {
                futures: "",
                options: "",
            },
        sebi_charges: {
                futures: "",
                options: "",
            },
        stamp_charges: {
                futures: "",
                options: "",
            }
        
    }
    ,
    equity_commodity_charges: {
        brokerage: {
            futures: "",
            options: "",
        },
        stt: {
            futures: "",
            options: "",
            },
        transaction_charges: {
                futures: "",
                options: "",
            },
        gst: {
                futures: "",
                options: "",
            },
        sebi_charges: {
                futures: "",
                options: "",
            },
        stamp_charges: {
                futures: "",
                options: "",
            }
        
    },
    fee_structure: {
        stt: "0.0126% of Total Turnover",
        transaction_charges: "0.00325% of Total Turnover",
        gst: "18% of (brokerage + transaction charges)",
        sebi_charges: "Ts.5/ crore",
        stamp_charges: "Depends on State (very minimal)",
        trading_account_opening_charges: "Rs.200",
        trading_account_amc_charges: "Rs.0",
        demat_account_opening_charges: "Rs.200",
        demat_account_amc_charges: "Rs 300 per year"

    }
    ,
    margin_exposure: {
        equity_delivery: "1x for fixed brokerage plan; Upto 4.5x for standard plan",
        equity_intraday: "Upto 16x",
        equity_futures: "6x",
        equity_options: "",
        currency_futures: "6x",
        currency_options: "",
        commodity_futures: "",
        commodity_options: ""
    },
    ratings: {
      number_of_reviews: "12",
      overall_ratings: "3.9/5",
      fees: "3.8/5",
      trading_brokerage: "4.4/5",
      trading_platform_usability: "4.0/5",
      customer_service: "3.9/5",
      research_capabilities: "4.0/5",
      
      broker_rating: ""
  }
     
  }    
}
