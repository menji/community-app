/**
 * Track Component.  Renders the track, winner and list of
 * finalists for the given track of an event.
 */
import React from 'react';
import PT from 'prop-types';
import { themr } from 'react-css-super-themr';
import { config, Link } from 'topcoder-react-utils';

import defaultStyles from './styles.scss';

const Track = ({
  data, track, theme,
}) => (data ? (
  <div className={theme.container}>
    <div className={theme.track}>
      {track}
    </div>
    <div className={theme.winner}>
      <img src={data.fields.champion.fields.image.fields.file.url} alt="Winner Portrait" />
      <div>
        <Link to={`${config.URL.BASE}/members/${data.fields.champion.fields.handle}`}>
          {data.fields.champion.fields.handle}
        </Link>
      </div>
      <div className={theme.label}>
Champion
      </div>
    </div>
    {
      data.fields.members.map(member => (
        <div key={member.fields.handle} className={theme.finalist}>
          <Link to={`${config.URL.BASE}/members/${member.fields.handle}`}>
            {member.fields.handle}
          </Link>
        </div>
      ))
    }
    <div className={theme.filler} />
  </div>
) : false);

Track.defaultProps = {
  track: 'TRACK',
  data: null,
};

Track.propTypes = {
  data: PT.shape(),
  track: PT.string,
  theme: PT.shape().isRequired,
};

export default themr('hall-of-fame/tco-track', defaultStyles)(Track);
