import React from 'react'

import { ProjectInfoType } from './types'

const ProjectContext = React.createContext<{project: ProjectInfoType | null}>({
  project: null,
});

export {
  ProjectContext
}