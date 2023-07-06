import styles from './styles.module.css'
import * as Dialog from '@radix-ui/react-dialog'
import {ReactNode} from "react";

type ModalProps = {
  showModal: boolean
  title?: ReactNode
  children: ReactNode
}

const Modal = ({showModal, title, children}: ModalProps) => {
  return (
    <Dialog.Root open={showModal}>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.cardModal}>
          <Dialog.Title className={styles.title}> {title} </Dialog.Title>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal