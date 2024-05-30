interface IRegisterComponentProps extends IBaseCompProps {}

interface IRegisterComponent<P = {}> extends IBaseComp<P> {}

interface IRegisterComponentState extends IBaseCompState {
    email: string;
    password: string;
}
