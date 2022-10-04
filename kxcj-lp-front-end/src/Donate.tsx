import React from 'react';

function Donate() {
  return (
      <div>
        <form action="https://www.paypal.com/donate" method="post" target="_top">

          <input type="hidden" name="business" value="donate@kxcj.org"/>

          <input type="hidden" name="no_recurring" value="0"/>
          <input type="hidden" name="item_name" value="KXCJ-LP is an volunteer-run, community-based FM radio station serving Cave Junction and the surrounding Illinois River Valley."/>
          <input type="hidden" name="item_number" value=""/>
          <input type="hidden" name="currency_code" value="USD"/>

          <input type="image" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" alt="Donate"/>
          <img alt="" width="1" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
        </form>
      </div>
  )
}

export default Donate;
