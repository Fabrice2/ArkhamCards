import React from 'react';
import PropTypes from 'prop-types';
import { keys } from 'lodash';
import {
  ActivityIndicator,
  NativeEventEmitter,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import iCloudAccountStatus from 'react-native-icloud-account-status';

import L from '../../app/i18n';
import withNetworkStatus from '../core/withNetworkStatus';
import SettingsItem from './SettingsItem';

class ICloudButton extends React.Component {
  static propTypes = {
    componentId: PropTypes.string.isRequired,
    networkType: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      hasICloud: false,
    };

    this._onPress = this.onPress.bind(this);
  }

  onPress() {
    Navigation.showOverlay({
      component: {
        name: 'Dialog.ICloud',
        options: {
          layout: {
            backgroundColor: 'rgba(128,128,128,.75)',
          },
        },
      },
    });
  }

  componentDidMount() {
    iCloudAccountStatus.getStatus()
      .then((accountStatus) => {
        this.setState({
          loading: false,
          hasICloud: accountStatus === iCloudAccountStatus.STATUS_AVAILABLE,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          hasICloud: false,
        });
      });
  }

  render() {
    const {
      networkType,
    } = this.props;
    const {
      loading,
      hasICloud,
    } = this.state;
    if (loading) {
      return (
        <SettingsItem text={L('Checking iCloud')} loading />
      );
    }
    if (networkType === 'none') {
      return (
        <SettingsItem text={L('iCloud not available without network')} />
      );
    }
    if (!hasICloud) {
      return (
        <SettingsItem text={L('Sign-in to ICloud to backup/restore')} />
      );
    }
    return (
      <SettingsItem onPress={this._onPress} text={L('iCloud Sync')} />
    );
  }
}

export default withNetworkStatus(ICloudButton);