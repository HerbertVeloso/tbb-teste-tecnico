import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useProducts } from '../../hooks/useProducts';
import { Category, CloseButton, Description, Image, Overlay, Title, Wrapper } from './styles';

export function ProductModal() {
  const { modalIsVisible, modalProduct, onCloseProductModal } = useProducts();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onCloseProductModal();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseProductModal]);

  let container = document.getElementById('modal-root');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'modal-root');
    document.body.appendChild(container);
  }

  if (!modalIsVisible || !modalProduct) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Wrapper>
        <Image
          src={modalProduct.images[0].asset.url}
          alt={modalProduct.images[0].alt}
        />
        <CloseButton
          type='button'
          onClick={onCloseProductModal}
        >
          <AiOutlineClose />
        </CloseButton>
        <Title>{modalProduct.name}</Title>
        <Description>{modalProduct.shortDescription}</Description>
        <Category>
          <span>Categoria:</span>
          {modalProduct.category.name}
        </Category>
      </Wrapper>
    </Overlay>,
    container
  );
}
