import styled from 'styled-components';

interface IAlbumWrapperType {
    width: string
    size: string
    $bgp: string
}

export const AlbumWrapper = styled.div<IAlbumWrapperType>`
  .album-image {
    position: relative;
    width: ${props => props.width};
    height: ${props => props.size};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${props => props.size};
      height: ${props => props.size};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.$bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    cursor: pointer;

    .name, .artist {
      &:hover {
        text-decoration: underline;
      }
    }

    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`
