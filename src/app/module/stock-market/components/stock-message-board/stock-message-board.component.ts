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
      information: "Zerodha is India's No. 1 stockbroker. It is largest and most popular broker offering online flat fee discount brokerage services to invest in Equity, Currency, Commodity, IPO and Direct Mutual Funds. Zerodha charges Rs 0 brokerage for equity delivery trades and direct mutual funds. For intraday and F&O, it charges flat Rs 20 or 0.03% (whichever is lower) per trade. With Zerodha, the maximum brokerage you pay for any transaction is Rs 20 for an order (of any size, amount or segment).",
      
      about: {
      
      broker_name: "Zerodha",
      type_of_broker: "Discount Broker",
      supported_exchanges: "NSE, BSE, MCX and NCDEX",
      account_type: "Flat Brokerage Plan",
      year_of_incorporation: 2010,
      number_of_branches: 22,
      broker_inquiry: '/review/zerodha'
      },
  
      charges_and_amc: {
          trading_account_opening_charges: "Rs 200",
          trading_account_amc_charges: "Rs 0 (Free)",
          demat_account_opening_charges: "Rs 0",
          demat_account_amc_charges: "Rs 300"
      },
      brokerage: {
          account_type: "Flat Brokerage Plan",
          fixed_charges: "-",
          equity_delivery_brokerage: "Rs 0 (Free)",
          equity_intraday_brokerage: "Rs 20 per executed order or .03% whichever is lower",
          equity_futures_brokerage: "Rs 20 per executed order or .03% whichever is lower",
          equity_options_brokerage: "Rs 20 per executed order",
      currency_futures_trading_brokerage: "Rs 20 per executed order or .03% whichever is lower",
      currency_options_trading_brokerage: "Rs 20 per executed order or .03% whichever is lower",
      commodity_futures_trading_brokerage: "Rs 20 per executed order or .03% whichever is lower	",
      commodity_options_trading_brokerage: "Rs 20 per executed order or .03% whichever is lower	"
      },
      brokerage_plan2: {
          account_type: "Flat Brokerage Plan",
          fixed_charges: "-",
          equity_delivery_brokerage: "Rs 0 (Free)",
          equity_intraday_brokerage: "Rs 20 per executed order or .03% whichever is lower",
          equity_futures_brokerage: "Rs 20 per executed order or .03% whichever is lower",
          equity_options_brokerage: "Rs 20 per executed order",
      currency_futures_trading_brokerage: "Rs 20 per executed order or .03% whichever is lower",
      currency_options_trading_brokerage: "Rs 20 per executed order or .03% whichever is lower",
      commodity_futures_trading_brokerage: "Rs 20 per executed order or .03% whichever is lower",
      commodity_options_trading_brokerage: "Rs 20 per executed order or .03% whichever is lower"
      },
      brokerage_plan3: {
          account_type: "",
          fixed_charges: "",
          equity_delivery_brokerage: "",
          equity_intraday_brokerage: "",
          equity_futures_brokerage: "",
          equity_options_brokerage: "	",
      currency_futures_trading_brokerage: "",
      currency_options_trading_brokerage: "",
      commodity_futures_trading_brokerage: "",
      commodity_options_trading_brokerage: ""
      },
      minimum_brokerage_charges: "0.03% in Intraday and F&O",
      other_brokerage_charges: "Physical contact notes: Rs 20, Trade SMS Alerts: Rs 1 per SMS",
      call_and_trade_charges: "Rs 50 per executed order",
      
      transaction_charges: {
          equity_delivery: "NSE Rs 345 per Cr (0.00345%) | BSE Rs 300 per Cr (0.003%) (each side)	",
          equity_intraday: "NSE Rs 345 per Cr (0.00345%) | BSE Rs 300 per Cr (0.003%) (each side)	",
          equity_futures: "NSE Rs 200 per Cr (0.002%)	",
          equity_options: "NSE Rs 5300 per Cr (0.053%) (on premium)	",
          currency_futures: "NSE Rs 90 per Cr (0.0009%) | BSE Rs 22 per Cr (0.00022%)	",
          currency_options: "NSE Rs 3500 per Cr (0.035%) | BSE Rs 100 per Cr (0.001%) (on premium)",
          commodity: "Group A - Rs 260 per Cr (0.0026%)",
          enquire: "/review/zerodha"
      },
      leverage: {
          equity_delivery: "1x (no margin)",
          equity_intraday: "Up to 20x (based on the stock)",
          equity_futures: "Intraday - 40%(2.5x), Carry forward - 100%(1x) of Total margin (Span+ Exposure)",
          equity_options: "Intraday - 40%(2.5x), Carry forward - 100%(1x) of Total margin (Span+ Exposure)",
          currency_futures: "Intraday - 40%(2.5x), Carry forward - 100%(1x) of Total margin (Span+ Exposure)",
          currency_options: "Intraday - 40%(2.5x), Carry forward - 100%(1x) of Total margin (Span+ Exposure)",
          commodity_futures: "Intraday - 40%(2.5x), Carry forward - 100%(1x) of Span",
          commodity_options: "-",
          enquire: "/review/zerodha"
      },
      features: {
          three_in_one_account: "no",
          charting: "yes",
          automated_trading: "yes",
          sms_alerts: "no",
          online_demo: "yes",
          online_portfolio: "no",
          margin_trading_funding_available: "no",
          margin_against_shares_equity_cash: "yes",
          margin_against_shares_equity_f_o: "yes",
          trading_platforms: "Kite Web, Kite Mobile for Android/iOS and Coin",
          intraday_square_off_time: "Eq Cash: 3:15 PM | Eq F&O : 3:25 PM | Currency: 4:45 PM | Commodities: 25 min before close",
          other_features: "Direct Mutual Funds, APIs for Algo Trading",
          referral_program: "yes",
          enquire: "/review/zerodha"
  
  
      },
      ratings: {
          number_of_reviews: "77",
          fees: "3.5",
          trading_brokerage: "4.5",
          trading_platform_usability: "3.5",
          customer_service: "4.5",
          research_capabilities: "2.5",
          overall_ratings: "3.5",
          broker_rating: "3.7"
      },
      request_callback: {
  
      },
      investment_options: {
          stock_or_equity: "yes",
          commodity: "yes",
          currency: "yes",
          ipo: "yes",
          mutual_funds: "yes",
          bond_or_ncd: "no",
          debt: "no",
          other_investment_options: "-"
  
      },
      order_type_offered: {
          bracket_order: "yes",
          cover_order: "yes",
          buy_today_sell_tomorrow: "yes",
          sell_today_buy_tomorrow: "no",
          after_market_order: "yes",
          good_till_cancelled: "yes",
          enquire: "/review/five-paisa"
  
      },
      research_report: {
          daily_market_report: "no",
          free_tips: "no",
          quaterly_result_analysis: "no",
          news_alerts: "no",
  
      },
      investor_type: {
          casual_investor: "-",
          active_investor: "yes",
          trader: "yes"
      },
      pros: [
          "Free equity delivery trades. No brokerage charges for Cash-N-Carry orders.",
          "Excellent trading platforms (Kite) available for free.",
          "Simple flat fee brokerage services across segments and exchanges (BSE, NSE, MCX).",
          "Brokerage is 0.03% or Rs 20 per executed order, whichever is lower for Intraday, F&O and Currency Derivatives. No hidden charges.",
          "Direct Mutual Fund Investment is available.",
          "Over 10 lakha+ active customers and 10% of daily volume at BSE, NSE and MCX.",
          "Zerodha Referral Program offers 10% broekrage share to clients you refer.",
          "Good Till Triggered (GTT) order are available. These are simillar to GTC orders."
      ],
      cons: [
          "Doesn't provide stock tips, research reports or recommendations.",
          "Call & Trade is charged at extra Rs 50 order.",
          "Auto Square off is charged at extra Rs 50 order.",
          "Doesn't offer 3-in-1 account.",
          "Doesn't offer unlimited trading plans.",
          "Doesn't offer AMC Free Demat account."
      ]
  
    }  
}
