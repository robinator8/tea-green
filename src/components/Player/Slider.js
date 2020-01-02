import React from 'react';
import { Range, getTrackBackground } from 'react-range';
import { formatTime } from '../../utils/parsing'

const STEP = 0.001;
const MIN = 0;
const MAX = 1;
const COLORS = ['#b5e0ad', '#ccc'];

const ThumbLabel = ({
    rangeRef,
    values,
    index,
    songLength
}) => {
  return (
    <div
      data-label={index}
      style={{
        display: 'block',
        position: 'absolute',
        top: '-4.2vmin',
        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.8)',
        fontSize: '1.75vmin',
        padding: '0.5vmin',
        borderRadius: '0.5vmin',
        backgroundColor: '#b5e0ad',
        whiteSpace: 'nowrap',
      }}
    >
      {formatTime(values[index] * songLength)}
    </div>
  );
};

class Labeled extends React.Component {
  state = {
    values: [0],
    isDragged: false
  }

  rangeRef = React.createRef();
  trackRef = React.createRef();

  onChange = (values) => {
    this.setState({
      values: values
    })
  }

  render() {
    const values = this.state.isDragged ? this.state.values : this.props.values
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <Range
          allowOverlap
          values={values}
          ref={this.rangeRef}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={this.onChange}
          onFinalChange={this.props.onChange}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '0px',
                display: 'flex',
                width: '100%'
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '0.7vmin',
                  width: '100%',
                  borderRadius: '0px',
                  margin: '0 5vmin',
                  background: getTrackBackground({
                    values: values,
                    colors: COLORS,
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: 'center'
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, index, isDragged }) => {
            if (isDragged !== this.state.isDragged) {
              // this.setState({
              //   isDragged: isDragged
              // })
              this.state.isDragged = isDragged
            }
            return (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: `3.5vmin`,
                  width: `3.5vmin`,
                  borderRadius: '0.6vmin',
                  backgroundColor: '#FFF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0px 0.2vmin 0.7vmin #AAA'
                }}
              >
                <ThumbLabel
                  rangeRef={this.rangeRef.current}
                  values={values}
                  index={index}
                  songLength={this.props.songLength}
                />
                <div
                  style={{
                    height: '2.2vmin',
                    width: '0.7vmin',
                    backgroundColor: isDragged ? '#b5e0ad' : '#CCC'
                  }}
                />
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default Labeled;