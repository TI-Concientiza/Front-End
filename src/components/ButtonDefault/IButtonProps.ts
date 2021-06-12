type IButtonProps = {
    buttonProps: {
        title: string;
        action?: () => void;
        error: boolean;
        errorMessage?: string;
    };
};

export default IButtonProps;
