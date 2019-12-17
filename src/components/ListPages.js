import React, { PureComponent } from 'react';
import { Pagination } from 'react-bootstrap';
import './App.css';

class ListPages extends PureComponent {
    render() {
        const st = this.props;
        const { current } = st;
        const { size } = st;
        const prev = current - 1;
        const next = current + 1;

        return (
            <div className="mx-auto d-block">
                <Pagination>
                    {current === 0 ? <Pagination.First disabled /> :
                        <Pagination.First onClick={() => { st.onClick(0); }} />}
                    {current === 0 ? <Pagination.Prev disabled /> :
                        <Pagination.Prev onClick={() => { st.onClick(current-1); }} />}
                    {(current === size - 1 && prev - 1 > 0) &&
                        <Pagination.Item onClick={() => { st.onClick(prev-1); }}>{prev}</Pagination.Item>}
                    {prev >= 0 &&
                        <Pagination.Item onClick={() => { st.onClick(prev); }}>{prev + 1}</Pagination.Item>}
                    <Pagination.Item active onClick={() => { st.onClick(current); }}>{current + 1}</Pagination.Item>
                    {next < size &&
                        <Pagination.Item onClick={() => { st.onClick(next); }}>{next + 1}</Pagination.Item >}
                    {(current === 0 && next + 1 < size) &&
                        <Pagination.Item onClick={() => { st.onClick(next+1); }}>{next + 2}</Pagination.Item>}
                    {current === size - 1 ? <Pagination.Next disabled /> :
                        <Pagination.Next onClick={() => { st.onClick(next); }} />}
                    {current === size - 1 ? <Pagination.Last disabled /> :
                        <Pagination.Last onClick={() => { st.onClick(size - 1); }} />}
                </Pagination>
            </div>
        );
    }
}

export default ListPages;