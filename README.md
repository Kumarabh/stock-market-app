npm install express � save
npm install mongoose � save
npm install body-parser --save
 

{
    charges: {
        trading_account_opening_charges: '',
        trading_annual_maintenance_charges: '',
        demat_account_opening_charges: '',
        demat_annual_maintenance_charges: ''
    },
    brokerage_charges: {
        equity_delivery: '',
        equity_intraday_f_o: '',
        currency_f_o

    }

}

table equity brokerage charges
-------------------------------
table_equity_brokerage_charges :{
    
        brokerage_free_flat_plan: {equity_delivery: '', equity_intraday: '' },
        brokerage_unlimited: {equity_delivery: '', equity_intraday: '' },
        stt: {equity_delivery: '', equity_intraday: '' },
        transaction_charges: {equity_delivery: '', equity_intraday: '' },
        gst: {equity_delivery: '', equity_intraday: '' },
        sebi_charges: {equity_delivery: '', equity_intraday: '' },
        stamp_charges: {equity_delivery: '', equity_intraday: '' }
    
}


table f&o brokerage charges
-------------------------------
table_f_o_brokerage_charges: {
   
        brokerage_free_flat_plan: {futures: '', options: '' },
        brokerage_unlimited: {futures: '', options: '' },
        stt: {futures: '', options: '' },
        transaction_charges: {futures: '', options: '' },
        gst: {futures: '', options: '' },
        sebi_charges: {futures: '', options: '' },
        stamp_charges: {futures: '', options: '' }
    
}


currency f&o brokerage charges
-------------------------------
table_currency_f_o_brokerage_charges: {
   
        brokerage_free_flat_plan: {futures: '', options: '' },
        brokerage_unlimited: {futures: '', options: '' },
        stt: {futures: '', options: '' },
        transaction_charges: {futures: '', options: '' },
        gst: {futures: '', options: '' },
        sebi_charges: {futures: '', options: '' },
        stamp_charges: {futures: '', options: '' }
    
}

fee_structure: {
    stt: '',
    sebi_charges: '',
    stamp_duty: '',
    gst
}

prepaid_plan
brokerage_cash
brokerage_futures
brokerage_options
brokerage_currency_options
e_atm_limit
margin_trading_interest_rate

------
plan
equity_cash
futures
options
currency_f_o
interest_rate