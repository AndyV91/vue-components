const transitions = ".scale-bounce-transition-enter-active, .scale-bounce-transition-leave-active {\n  transition: cubic-bezier(0.8, 0.16, 0, 1.3) 0.5s transform, 0.2s opacity;\n}\n.scale-bounce-transition-enter-from, .scale-bounce-transition-leave-to {\n  transform: scale(0);\n  opacity: 0 !important;\n}\n\n.snackbar-move,\n.snackbar-enter-active,\n.snackbar-leave-active {\n  transition: all 0.5s ease;\n}\n\n.snackbar-enter-from,\n.snackbar-leave-to {\n  transform: scale(0);\n  opacity: 0;\n}\n\n.snackbar-leave-active {\n  position: absolute;\n}\n\n.list-move,\n.list-enter-active,\n.list-leave-active {\n  transition: all 0.5s ease;\n}\n\n.list-enter-from,\n.list-leave-to {\n  opacity: 0;\n  transform: translateX(30px);\n}\n\n.list-leave-active {\n  position: absolute;\n}\n\n.list-static-move,\n.list-static-enter-active,\n.list-static-leave-active {\n  transition: all 0.5s ease;\n}\n\n.list-static-enter-from,\n.list-static-leave-to {\n  opacity: 0;\n}\n\n.list-static-leave-active {\n  position: absolute;\n}";
export {
  transitions as default
};
