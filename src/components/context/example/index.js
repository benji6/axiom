import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Context from '../Context';
import ContextBox from '../ContextBox';
import ContextMenu from '../ContextMenu';
import ContextMenuItem from '../ContextMenuItem';
import ContextTip from '../ContextTip';
import DropdownMenu from '../../dropdown/DropdownMenu';
import DropdownMenuItem from '../../dropdown/DropdownMenuItem';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import TextInput from '../../form/TextInput';

class ContextExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Context: PropTypes.object.isRequired,
      ContextBox: PropTypes.object.isRequired,
      ContextMenu: PropTypes.object.isRequired,
      ContextMenuItem: PropTypes.object.isRequired,
      ContextTip: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Context: components.Context,
      ContextBox: components.ContextBox,
      ContextMenu: components.ContextMenu,
      ContextMenuItem: components.ContextMenuItem,
      ContextTip: components.ContextTip,
    };

    const initialProps = {
      Context: {
        arrowRef: () => {},
      },
      ContextBox: {},
      ContextMenu: {},
      ContextMenuItem: {
        onClick: () => {},
      },
      ContextTip: {},
    };

    const initialPropOptions = {
      Context: {
        children: {
          options: [{
            name: 'ContextBox',
            children: (
              <ContextBox>
                <Heading textSize="headtitle">Lorem Ipsum</Heading>
                <Paragraph>
                  Quisque id hendrerit dolor. In congue vulputate mi, et
                  accumsan magna tristique id.
                </Paragraph>
              </ContextBox>
            ),
          }, {
            name: 'ContextMenu',
            children: (
              <ContextMenu>
                <ContextMenuItem>Lorem ipsum dolar</ContextMenuItem>
                <ContextMenuItem>Lorem ipsum dolar</ContextMenuItem>
                <ContextMenuItem>Lorem ipsum dolar</ContextMenuItem>
                <ContextMenuItem>Lorem ipsum dolar</ContextMenuItem>
                <ContextMenuItem>Lorem ipsum dolar</ContextMenuItem>
              </ContextMenu>
            ),
          }, {
            name: 'ContextTip',
            children: (
              <ContextTip>
                <Paragraph>
                  Quisque id hendrerit dolor. In congue vulputate mi, et
                  accumsan magna tristique id.
                </Paragraph>
              </ContextTip>
            ),
          }, {
            name: 'Multiple',
            children: [
              <ContextMenu key="First">
                <ContextMenuItem>Lorem ipsum dolar</ContextMenuItem>
              </ContextMenu>,
              <ContextMenu key="Second">
                <ContextMenuItem disabled>Lorem ipsum dolar</ContextMenuItem>
                <ContextMenuItem selected>Lorem ipsum dolar</ContextMenuItem>
              </ContextMenu>,
              <ContextBox key="Third">
                <Paragraph>Quisque id hendrerit dolor.</Paragraph>
              </ContextBox>,
            ],
          }, {
            name: 'Multiple with Scroll',
            children: [
              <ContextBox key="First">
                <Heading>Lorem ipsum dolar</Heading>
                <TextInput value="" />
              </ContextBox>,
              <DropdownMenu key="Second" maxHeight="9rem">
                <DropdownMenuItem>Lorem ipsum dolar</DropdownMenuItem>
                <DropdownMenuItem>Lorem ipsum dolar</DropdownMenuItem>
                <DropdownMenuItem>Lorem ipsum dolar</DropdownMenuItem>
                <DropdownMenuItem>Lorem ipsum dolar</DropdownMenuItem>
                <DropdownMenuItem>Lorem ipsum dolar</DropdownMenuItem>
                <DropdownMenuItem>Lorem ipsum dolar</DropdownMenuItem>
              </DropdownMenu>,
            ],
          }],
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <div snippetIgnore style={ { position: 'relative', display: 'inline-block' } }>
          <Context { ...initialProps.Context }>
            { initialPropOptions.Context.children.options[0].children }
          </Context>
        </div>
      </ExampleConfig>
    );
  }
}

export default [ ContextExample ];
