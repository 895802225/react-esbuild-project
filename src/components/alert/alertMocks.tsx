import React from "react";

interface AlertProps {
    visible: boolean
}

interface IState {
  visible: boolean
}

export class AlertWrap extends React.Component<AlertProps, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        visible: false
      }
    }
    static defaultProps = {
      visible: false,
    }
    private Instance: any = null
    UNSAFE_componentWillReceiveProps(nextProps: any) {
      if (this.props.visible !== nextProps.visible) {
        if (nextProps.visible) {
          this.setState({ visible: nextProps.visible })
        }else {
          this.close();
          console.log('埋点')
        }
      }
    }
    componentDidUpdate(prevProps: any, prevState: IState) {
      if (prevState.visible !== this.state.visible) {
        if(this.state.visible) {
          console.log('埋点发送')
        }
      }
    }
    componentDidMount() {
      if (this.props.visible !== this.state.visible && this.props.visible) this.setState({ visible: true });
    }
    public close = () => {
      this.Instance && this.Instance.close(this.hide);
    }
    private hide = () => {
      this.setState({ visible: false })
    }
  
    render() {
      console.log('render')
      const { 
        visible
      } = this.props
      return null
    }
  }
  