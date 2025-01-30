import React, { FC, useEffect, useState } from 'react'
import { RichTextFieldInterface } from '../utils/type';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { createInitial } from '../../../../../utils';

export const RichTextField:FC<RichTextFieldInterface> = ({
    value,
    changeValue,
    id,
    label,
    require,
    error,
    placeholder,
    tooltip
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
    ],
    content: value,
    editable: true,
    onUpdate: ({ editor }) => {
      changeValue(editor.getHTML())
    },
  });

  const [openTitlePopup, setOpenTitlePopup] = useState(false);
  const [openTitleChoicePopup, setOpenTitleChoicePopup] = useState("");

  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    if(error){
      if(id === error.field){
        setErrorMessage(error.message)
      }
    }
  }, [error, id])


  const CustomMenu = () => (
    <div className="kui-text-editor-custom-menu">
      <button 
        onClick={() => editor?.chain().focus().toggleBold().run()} 
        disabled={!editor?.can().chain().focus().toggleBold().run()}
        className={`kui-text-editor-custom-menu-button ${editor?.isActive('bold') ? 'active' : ''}`}
      >
        <i className="pi-bold-line"></i>
        <span>Mettre en gras</span>
       
      </button>
      <button 
        onClick={() => editor?.chain().focus().toggleItalic().run()} 
        disabled={!editor?.can().chain().focus().toggleItalic().run()}
        className={`kui-text-editor-custom-menu-button ${editor?.isActive('italic') ? 'active' : ''}`}
      >
        <i className="pi-italic-line"></i>
        <span>Mettre en italique</span>
      </button>
      <button 
        onClick={() => editor?.chain().focus().toggleUnderline().run()} 
        disabled={!editor?.can().chain().focus().toggleUnderline().run()}
        className={`kui-text-editor-custom-menu-button ${editor?.isActive('underline') ? 'active' : ''}`}
      >
        <i className="pi-underline-line"></i>
        <span>Souligner</span>
      </button>
      <button 
        onClick={() => editor?.chain().focus().toggleStrike().run()} 
        disabled={!editor?.can().chain().focus().toggleStrike().run()}
        className={`kui-text-editor-custom-menu-button ${editor?.isActive('strike') ? 'active' : ''}`}
      >
        <i className="pi-strikethrough-line"></i>
        <span>Mettre en strike</span>
      </button>
     
      <button 
        onClick={() => editor?.chain().focus().toggleBulletList().run()} 
        disabled={!editor?.can().chain().focus().toggleBulletList().run()}
        className={`kui-text-editor-custom-menu-button ${editor?.isActive('bulletList') ? 'active' : ''}`}
      >
        <i className="pi-list-check-line"></i>
        <span>Liste</span>
      </button>

      <button 
        onClick={() => editor?.chain().focus().toggleOrderedList().run()} 
        disabled={!editor?.can().chain().focus().toggleOrderedList().run()}
        className={`kui-text-editor-custom-menu-button ${editor?.isActive('orderedList') ? 'active' : ''}`}
      >
        <i className="pi-list-ordered-line"></i>
        <span>Liste à chiffres</span>
      </button>

      <div className='kui-text-editor-custom-menu-select'>
        <button className='kui-text-editor-custom-menu-button' onClick={() => setOpenTitlePopup(true)}>
          {
            openTitleChoicePopup ? (
              <strong>{createInitial(openTitleChoicePopup)}</strong>
            ) : (
              <>
                <i className="pi-heading-1-line"></i>
                <span>Changer le niveau du titre</span>
              </>
            )
          }
        </button>
        {
          openTitlePopup && (
            <div className='kui-text-editor-custom-menu-select__list'>
              <button 
                onClick={() => {
                  editor?.chain().focus().toggleHeading({ level: 1 }).run()
                  setOpenTitleChoicePopup("Titre 1")
                  setOpenTitlePopup(false)
                }} 
                disabled={!editor?.can().chain().focus().toggleHeading({ level: 1 }).run()}
                className={`kui-text-editor-custom-menu-select__button ${editor?.isActive('heading', { level: 1 }) ? 'active' : ''}`}
              >
                <i className="pi-heading-1-line"></i>
                <span>Niveau 1</span>
              </button>
              <button 
                onClick={() => {
                  editor?.chain().focus().toggleHeading({ level: 2 }).run()
                  setOpenTitleChoicePopup("Titre 2")
                  setOpenTitlePopup(false)
                }} 
                disabled={!editor?.can().chain().focus().toggleHeading({ level: 2 }).run()}
                className={`kui-text-editor-custom-menu-select__button ${editor?.isActive('heading', { level: 2 }) ? 'active' : ''}`}
              >
                <i className="pi-heading-2-line"></i>
                <span>Niveau 2</span>
              </button>
              <button 
                onClick={() => {
                  editor?.chain().focus().toggleHeading({ level: 3 }).run()
                  setOpenTitleChoicePopup("Titre 2")
                  setOpenTitlePopup(false)
                }} 
                disabled={!editor?.can().chain().focus().toggleHeading({ level: 3 }).run()}
                className={`kui-text-editor-custom-menu-select__button ${editor?.isActive('heading', { level: 3 }) ? 'active' : ''}`}
              >
                <i className="pi-heading-3-line"></i>
                <span>Niveau 3</span>
              </button>
            </div>
          )
        }
      </div>

      <button 
        onClick={() => {
          const selectedText = editor?.state.selection.content();
          if (selectedText) {
            const text = selectedText.content.textBetween(0, selectedText.content.size);
            editor?.chain().focus().insertContent(text.toUpperCase()).run();
          }
        }} 
        disabled={!editor}
        className={`kui-text-editor-custom-menu-button ${editor?.isActive('textStyle', { textTransform: 'uppercase' }) ? 'active' : ''}`}
      >
        <i className="pi-font-line"></i>
        <span>Majuscule</span>
      </button>
      
      <button 
        onClick={() => {
          const selectedText = editor?.state.selection.content();
          if (selectedText) {
            const text = selectedText.content.textBetween(0, selectedText.content.size);
            editor?.chain().focus().insertContent(text.toLocaleLowerCase()).run();
          }
        }} 
        disabled={!editor}
        className={`kui-text-editor-custom-menu-button ${editor?.isActive('textStyle', { textTransform: 'lowercase' }) ? 'active' : ''}`}
      >
        <i className="pi-font-size-line"></i>
        <span>Miniscule</span>
      </button>
      <button 
        onClick={() => {
          const citation = prompt("Veuillez entrer la citation:");
          if (citation) {
            editor?.chain().focus().insertContent(`<blockquote>${citation}</blockquote>`).run();
          }
        }} 
        disabled={!editor}
        className={`kui-text-editor-custom-menu-button ${editor?.isActive('blockquote') ? 'active' : ''}`}
      >
        <i className="pi-blockquote-line"></i>
        <span>Ajouter une citation</span>
      </button>
      
    </div>
  );


  return (
    <div className={`kui-textfield  ${errorMessage ? "st--error" : ""}`}>
      {
        label ? (
          <label className={"kui-textfield__label kui-textfield-label"} htmlFor={`kui-normal-input-` + id}>
            <strong className={"kui-textfield-label__text"}>{label}</strong>
            {
              !require && (
                <span className={"kui-textfield__optionnal"}>(optionnel)</span>
              )
            }
          </label>
        ) : null
      }
      <div className={"kui-textfield__field"}>
        <div className='kui-text-editor'>
          <CustomMenu />
          <EditorContent editor={editor} className="kui-text-editor-editor-content" />
        </div>
      </div>
      {
        errorMessage ? (
          <div className={"kui-textfield__message kui-textfield-message"}>
            {errorMessage}
          </div>
        ) : null
      }
    </div>
  )
}
