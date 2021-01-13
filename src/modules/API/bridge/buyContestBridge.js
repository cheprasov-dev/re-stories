import bridge from '@vkontakte/vk-bridge';
import stringify from 'json-stable-stringify' //  canonical json implementation
import md5 from 'md5'
import base64 from 'base-64'
import sha1 from 'sha1'

export async function buyContestBridge(params1) {


  let amount = 1;
  let merch_data = {
    amount: amount,
    order_id: md5('fesdgrg34235423mrgmd#34rt5e4mlg%^#R$#gfr,glb,'),
    currency: "RUB",
    ts: (Date.now() / 1000 | 0), // так можно отбросить дробную часть)
  };

  let merch_data_base64 = base64.encode(JSON.stringify(merch_data))
  let data = {
    order_id: '126452412',
    ts: merch_data.ts,
    currency: "RUB",
    merchant_data: merch_data_base64,
    merchant_sign: sha1(merch_data_base64 + '2f933cf5159c81986062fee86f29f0263647554e'),
    group_id: 198600808

};

  let pay_window_params = {
    action: "pay-to-service",
    amount: amount,
    data: data,
    description: "Оплата за конкурс",
    merchant_id: 157959,
    version: 2
  }

  let params = ""

  Object.keys(pay_window_params).sort((a, b) => a > b).forEach(
    function (key) {
      console.log(key)
      if (key !== "action") params += key + "=" + ( key === "data"
        ? stringify( pay_window_params[key] ) : pay_window_params[key] )
    }
  )
  pay_window_params.sign = md5(params + '2f933cf5159c81986062fee86f29f0263647554e')

  console.log(pay_window_params)
  console.log(params1)
  await bridge.send('VKWebAppOpenPayForm', {
      app_id: Number(process.env.REACT_APP_API_ID),
      action: 'pay-to-service',
      params: params1
    }
  )
}



