'use client';

import { Alignment, Fit, Layout, useRive, useStateMachineInput } from '@rive-app/react-canvas';
import type { StateMachineInput } from '@rive-app/react-canvas';
import { useEffect } from 'react';
import styles from './auth-mascot.module.css';

export interface AuthMascotProps {
	isHandsUp: boolean;
	isChecking: boolean;
	lookOffset: number;
}

const STATE_MACHINE_NAME = 'Login Machine';

function setBool(input: StateMachineInput | null, value: boolean) {
	if (!input) return;
	input.value = value;
}

function setNumber(input: StateMachineInput | null, value: number) {
	if (!input) return;
	input.value = value;
}

export const AuthMascot = ({ isHandsUp, isChecking, lookOffset }: AuthMascotProps) => {
	const { rive, RiveComponent } = useRive({
		src: '/login-teddy.riv',
		stateMachines: STATE_MACHINE_NAME,
		autoplay: true,
		layout: new Layout({
			fit: Fit.Cover,
			alignment: Alignment.Center
		})
	});

	const handsUpInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'isHandsUp');
	const checkingInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'isChecking');
	const lookInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'numLook');

	useEffect(() => {
		if (!rive) return;

		setBool(handsUpInput, isHandsUp);
		setBool(checkingInput, isChecking);

		setNumber(lookInput, isChecking ? lookOffset : 0);
	}, [
		rive,
		isHandsUp,
		isChecking,
		lookOffset,
		handsUpInput,
		checkingInput,
		lookInput,
	]);

	return (
		<div className={styles.wrapper}>
			<RiveComponent />
		</div>
	);
};
