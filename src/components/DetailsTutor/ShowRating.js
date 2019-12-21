/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-cond-assign */
/* eslint-disable no-return-assign */
import React, { PureComponent } from 'react';
import '../App.css';
import './detailsTutor.css';

class InfoTutor extends PureComponent {
    render() {
        const st = this.props;
        let checkedStars=Number(st.value);
        const stars=[1,2,3,4,5];
        const showStars=stars.map(()=>{
            if(checkedStars>0){
                checkedStars-=1;
                return <span className="fa fa-star checked" />;
            }

            return <span className="fa fa-star " />;

        });

        return showStars;
    }
}

export default InfoTutor;
