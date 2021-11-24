import React from 'react';
import {
	Modal,
	StatusBar,
	View
} from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import styles from './style';

const FullScreenLoader = ({loading}) => {
	return (
		<Modal
			animationType='none'
			visible={loading}
			transparent
		>
			<StatusBar
				backgroundColor='rgba(52, 52, 52, 0.8)'
				barStyle='light-content'
			/>
			<View style={styles.activityIndicatorWrapper}>
				<DotIndicator color='white' size={10} count={3}/>
			</View>
		</Modal>
	);
};

export default FullScreenLoader;
