//+------------------------------------------------------------------+
//|                                                       MrMart.mq5 |
//|                                  Copyright 2021, MetaQuotes Ltd. |
//+------------------------------------------------------------------+
#property copyright "!"

#include <Trade\PositionInfo.mqh>
#include <Trade\Trade.mqh>
#include <Trade\SymbolInfo.mqh>
#include <Trade\OrderInfo.mqh>

CPositionInfo  o_position; 
CTrade         o_trade;
CSymbolInfo    o_symbol;
COrderInfo     o_order;

input double         Lot                = 0.02;
input double         profitBuyPrice     = 1;
input double         profitSellPrice    = 1;

ENUM_POSITION_TYPE Invertor = -1;

ENUM_POSITION_TYPE first_position_type    = -1;
datetime                lpos_time         = 0;
ENUM_POSITION_TYPE      lpos_type         = -1;
//-------------------------------------------------------------------+
//| Expert initialization function                                   |
//-------------------------------------------------------------------+
int OnInit()
{    
    if (!o_symbol.Name(Symbol()))
        return(INIT_FAILED);
        
    RefreshRates();
    
    o_trade.SetExpertMagicNumber(MagicNumber);
    
    if (IsFillingTypeAllowed(o_symbol.Name(), SYMBOL_FILLING_FOK))
    {
        o_trade.SetTypeFilling(ORDER_FILLING_FOK);
    }
    else if (IsFillingTypeAllowed(o_symbol.Name(), SYMBOL_FILLING_IOC))
    {
        o_trade.SetTypeFilling(ORDER_FILLING_IOC);
    }
    else 
    {
        o_trade.SetTypeFilling(ORDER_FILLING_RETURN);
    }
        
    return(INIT_SUCCEEDED);
}
//+------------------------------------------------------------------+
//| Expert deinitialization function                                 |
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
{

}  
//+------------------------------------------------------------------+
//| Expert tick function                                             |
//+------------------------------------------------------------------+
void OnTick()
{
    Invertor = lpos_type;     
                
    if (!PositionSelect(_Symbol)) // первый тикет, если последний закрытый был Sell, то следующий откроет Buy
    {
        if (Invertor != lpos_type)
        {    
            o_trade.Buy(Start_lot, NULL, 0.0, 0.0, 0.0, "first order buy Flow");
            PositionSelect(_Symbol);
            first_position_type = o_position.PositionType();
            BuyPrice = profitBuyPrice
            o_trade.SellStop(Lot, sell_price_buy, NULL, 0, 0, ORDER_TIME_GTC, 0, "second order buy Flow");
        }
        else 
        {
            o_trade.Sell(Start_lot, NULL, 0.0, 0.0, 0.0, "first order sell Flow");
            PositionSelect(_Symbol);
            first_position_type = o_position.PositionType();
            profitValue
            o_trade.BuyStop(Lot, buy_price_sell, NULL, 0, 0, ORDER_TIME_GTC, 0, "second order sell Flow");
        } 
    }
    
    if (!RefreshRates())
    {
        return;
    } 
                                                                                   
    for (int i = PositionsTotal() - 1; i>=0 ; i--)
    {
        if (o_position.SelectByIndex(i))
        {
            if (o_position.Symbol() == o_symbol.Name() && o_position.Magic() == MagicNumber)
            {
                if (o_position.Time() > lpos_time)
                {
                    lpos_time          = o_position.Time();
                    lpos_type          = o_position.PositionType();                    
                }
            }
        }
    }