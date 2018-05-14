
import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <a className='btn next-btn' href='/graphs'>
	      <svg width='40' height='40'>
	        <g transform="translate(40,0)scale(-1,1)">
	          <path
	           id="path3336"
	           d="m 1.0458607,22.232436 c 4.7597015,-4.7676 7.7879819,-11.2469 13.5959083,-14.5727995 -0.718172,3.1210995 -2.882525,5.9641995 -2.609412,9.5963995 10.85471,-4.3432 22.464931,-4.9339 27.197074,-4.3982 -1.517857,3.3929 -1.509973,8.5006 -0.385153,12.125 -3.928572,-1.6072 -20.95631,-3.5513 -27.161629,-1.6282 0.446429,3.9513 1.90301,5.6355 1.713925,9.3851 -2.096449,-2.0658 -7.7008731,-8.5457 -12.3507133,-10.5073 z"
	           style={{'fill':'none','fill-rule':'evenodd','stroke':'#00000','stroke-width':'2px','stroke-linecap':'round','stroke-linejoin':'round','stroke-opacity':'1'}} />
	         </g>
	      </svg>
    	</a>  
    );
  }
}

export default Button;




